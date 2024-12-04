import express from "express";
import product from "./product/controller.js";
import board from "./board/controller.js";

const router = express.Router();
router.use("/product", product);
router.use("/board", board);

export default router;
