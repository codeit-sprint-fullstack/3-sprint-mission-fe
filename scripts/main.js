import { getArticleList, getArticle } from "../services/articleService.js";


const temp1 = await getArticleList(1, 3, '마이크')
console.log(temp1)

const temp2 = await getArticle(98)
console.log(temp2)