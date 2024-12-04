import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Create = async (req, res) => {
  const body = req.body;
  try {
    const createData = await prisma.board.create({
      data: body,
    });
    res.status(201).send(createData);
  } catch (err) {
    console.error(err);
  }
};

const service = {
  Create,
};
export default service;
