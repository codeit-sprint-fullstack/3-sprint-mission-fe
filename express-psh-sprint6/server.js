import express from "express";
import cors from "cors";
import Product from "./models/Product.js";
import { DATABASE_URL } from "./env.js";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect(DATABASE_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.get("/items", async (req, res) => {
    try {
        const { page = 1, pageSize = 10, orderBy = "favorite", keyword = "" } = req.query;
        const searchQuery = keyword ? { name : { $regex: keyword }} : {};
        const sortOption = orderBy === "recent" ? { createdAt: -1 } : { createdAt: +1 };

        const offset = (page - 1) * pageSize;
        const limit = pageSize;
        const items = await Product.find(searchQuery).sort(sortOption).skip(offset).limit(limit);
        const totalCount = await Product.countDocuments(searchQuery);

        res.json({
            list: items,
            totalCount: totalCount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});


app.post('/registration', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).send(newProduct);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

app.listen(8000, () => console.log("서버가 시작되었습니다~"));