import { getProductList, getProduct, createProduct, patchProduct, deleteProduct} from "./ProductService.js";
import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle} from "./ArticleService.js";

const arr = {
    name : "아이폰",
    description : "아이폰16",
    price : 1500000,
    tags : ["휴대폰"],
    images : ["image주소"],
}

// productService 함수실행

// const result = await getProductList(2, 11, 'hi');
// console.log(result);

// const getProductResult = await getProduct(460);
// console.log(getProductResult);

// const createResult = await createProduct(arr);
// console.log(createResult);

// const patchResult = await patchProduct(460, arr);
// console.log(patchResult);

// const deleteResult = await deleteProduct(460);
// console.log(deleteResult);

//------------------------------------
//ArticleService.js 함수실행

const arr1 = {
    title: "hi938",
    content: "안녕하세요",
    image: "hi.img"
};


// const result = await getArticleList(1,2,'hi');
// console.log(result);

// const articleSearch = await getArticle(938);
// console.log(articleSearch);

// const postresult = await createArticle(arr1);
// console.log(postresult);

// const patchresult = await patchArticle(938, arr1);
// console.log(patchresult);

// const deleteResult = await deleteArticle(938);
// console.log(deleteResult);


