import express from "express";
import service from "./service.js";

const router = express.Router();
router.get("/", service.Items);
router.post("/create", service.Create);
router.patch("/edit", service.Patch);
router.delete("/delete", service.Delete);

export default router;
