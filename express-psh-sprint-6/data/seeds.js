import mongoose, { mongo } from "mongoose";
import { Data } from "./mockData.js";
import { DATABASE_URL } from "../env.js";
import Product from "../models/Product.js";

mongoose.connect(DATABASE_URL);

await Product.deleteMany({});
await Product.insertMany(Data.list);

console.log("success");
mongoose.connection.close();