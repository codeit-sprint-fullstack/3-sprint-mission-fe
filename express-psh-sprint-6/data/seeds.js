import mongoose, { mongo } from "mongoose";
import { Data } from "./mockData.js";
import dotenv from 'dotenv';
import Product from "../models/Product.js";

dotenv.config();
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl);

await Product.deleteMany({});
await Product.insertMany(Data.list);

console.log("success");
mongoose.connection.close();