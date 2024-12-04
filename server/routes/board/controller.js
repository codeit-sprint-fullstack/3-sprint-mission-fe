import express from "express";
import service from "./service.js";

const router = express.Router();
router.post("/create", service.Create);

export default router;
