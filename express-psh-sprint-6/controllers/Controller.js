import Product from "../models/Product.js";

//작성한  API를 컨트롤러 함수로 정의

//상품 목록 조회, 화면에 보이는 데이터 조회
export const getItems = async (req, res) => {
    try {
        const { page = 1, pageSize = 10, orderBy = "recent", keyword = "" } = req.query;
        const searchQuery = keyword ? {
            $or: [
                { name: { $regex: keyword } },
                { description: { $regex: keyword } },
            ]
        } : {};
        const sortOption = orderBy === "recent" ? { createdAt: -1 } : { createdAt: +1 };

        const offset = (page - 1) * pageSize;
        const limit = pageSize;
        const items = await Product.find(searchQuery).sort(sortOption).skip(offset).limit(limit);
        const totalCount = await Product.countDocuments(searchQuery);

        res.status(200).json({
            list: items,
            totalCount: totalCount,
        });
    } catch (err) {
        res.status(500).send("실패");
    }
};

// 상품 상세조회, id, name, description, price, tags, createdAt를 조회
export const getItemAdd = async (req, res) => {
    try {
        const id = req.params.id;
        const getItemAdd = await Product.findById(id).select("name description price tags createdAt");
        if (getItemAdd) {
            res.status(200).send(getItemAdd);
        } else {
            res.status(204).send("해당 ID의 제품을 찾을 수 없습니다.");
        }
    } catch (err) {
        res.status(400).send("실패");
    }
};


//상품 등록, name, description, price, tags를 입력하여 상품을 등록
export const registrationProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(400).send("실패");
    }
};

//상품 수정, name, description, price, tags를 입력하여 상품을 수정
export const editProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const editProduct = await Product.findById(id);
        if (editProduct) {
            editProduct.name = req.body.name;
            editProduct.description = req.body.description;
            editProduct.price = req.body.price;
            editProduct.tags = req.body.tags;
        }
        await editProduct.save();
        res.status(200).send(editProduct);
    } catch (err) {
        res.status(400).send("실패");
    }
};

//상품 삭제, 선택한 상품의 id와 일치하는 데이터 삭제
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (deleteProduct) {
            res.status(204).send("삭제 성공");
        } else {
            res.status(404).send("해당 ID의 제품을 찾을 수 없습니다.");
        }
    } catch (err) {
        res.status(400).send("실패");
    }
};