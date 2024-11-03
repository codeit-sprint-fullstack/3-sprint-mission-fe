import express from "express";
import cors from "cors";
import router from "./controllers/routes/routes.js";
import { DATABASE_URL } from "./env.js";
import mongoose from "mongoose";

const app = express();
app.use(cors());

app.use(express.json());

mongoose
    .connect(DATABASE_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use("/", router);

app.listen(8000, () => console.log("서버가 시작되었습니다~"));