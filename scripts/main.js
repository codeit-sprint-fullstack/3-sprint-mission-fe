import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from "../services/articleService.js";


// const temp1 = await getArticleList(1, 3, '마이크')
// console.log(temp1)
// getArticleList(1, 3, '마이크')



// const temp2 = await getArticle(126)
// console.log(temp2)
// getArticle(126);



// createArticle('8시뉴스', '비트코인 3억 돌파', 'bitcoin.jpg');



// const updateData = {
//   title: '긴급속보',
//   content: '비트코인 5억 돌파',
//   image: 'bitcoin.png'
// }
// patchArticle(98, updateData);



deleteArticle(103);