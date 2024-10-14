import { getArticleList } from "../services/articleService.js";


const temp = await getArticleList(1, 3, '정몽규')
console.log(temp)