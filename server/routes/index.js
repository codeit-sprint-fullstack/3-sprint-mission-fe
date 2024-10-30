import express from "express";
import product from "./product/controller.js";

const router = express.Router();
router.use("/product", product);
export default router;
