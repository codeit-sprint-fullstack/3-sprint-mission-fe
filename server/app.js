import express from "express";
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

app.use(express.json());
app.use("/api", router);

app.listen(port, () => console.log(`${port}서버시작`));
