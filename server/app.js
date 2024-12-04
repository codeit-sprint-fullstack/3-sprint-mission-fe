import express from "express";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors";
dotenv.config();

const port = 8000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
// mongoose
//   .connect(process.env.MONGO)
//   .then(() => console.log("MONGO Connect"))
//   .catch((err) => console.error(err));
app.use(express.json());
app.use("/", router);

app.listen(port, () => console.log(`${port}서버시작`));
