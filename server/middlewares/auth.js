import userRepository from "../repositories/userRepository.js";
import { expressjwt } from "express-jwt";

export function throwUnauthorizedError() {
  const error = new Error("Unauthorized");
  error.code = 401;
  throw error;
}

async function verifySessionLogin(req, res, next) {
  try {
    const { userId } = req.session;
    if (!userId) throwUnauthorizedError();

    const user = await userRepository.findById(userId, {
      board: true,
      comment: true,
    });
    req.user = {
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      board: user.board,
      comment: user.comment,
    };
    next();
  } catch (err) {
    next(err);
  }
}

const verifyAccessToken = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  requestProperty: "user",
  debug: true, // 디버그 모드 활성화
});

const auth = {
  verifySessionLogin,
  verifyAccessToken,
};
export default auth;
