import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from "../services/articleService.js";
import { getProductList, getProduct, createProduct } from "../services/productService.js";



// getArticleList(1, 3, '마이크')



// getArticle(126);



// createArticle('8시뉴스', '비트코인 3억 돌파', 'bitcoin.jpg');



// const updateData = {
//   title: '긴급속보',
//   content: '비트코인 5억 돌파',
//   image: 'bitcoin.png'
// }
// patchArticle(98, updateData);



// deleteArticle(117);



// getProductList(1, 3, '보스헤드셋')



// getProduct(408);



createProduct('테니스공', '고품질의 테니스공 3개입 제품입니다', 6000, 'China', ['스포츠용품'], ['tennis_ball.jpg']);