import { getArticleList, getArticle, createArticle } from "../services/articleService.js";


// const temp1 = await getArticleList(1, 3, '마이크')
// console.log(temp1)
getArticleList(1, 3, '마이크')


// const temp2 = await getArticle(126)
// console.log(temp2)
getArticle(126);


createArticle('긴급속보', '비트코인 3억 돌파', 'bitcoin.jpg');