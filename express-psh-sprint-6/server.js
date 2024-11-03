import express from "express";
import cors from "cors";
import router from "./controllers/routes/routes.js";
import dotenv from 'dotenv';
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const dbUrl = process.env.DATABASE_URL;

mongoose
    .connect(dbUrl)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use("/", router);

app.listen(8000, () => console.log("서버가 시작되었습니다~"));