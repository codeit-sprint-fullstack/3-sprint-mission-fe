import express from "express";
import { getItems, getItemAdd, registrationProduct, editProduct, deleteProduct } from "../Controller.js";

//컨트롤러 함수를 각 라우트에 연결

const router = express.Router();

router.get("/items", getItems); //상품 목록 조회
router.get("/items/:id", getItemAdd) //상품 상세조회
router.post("/registration", registrationProduct); //상품등록
router.patch("/edit/:id", editProduct); //상품수정
router.delete("/delete/:id", deleteProduct); //상품삭제

export default router;