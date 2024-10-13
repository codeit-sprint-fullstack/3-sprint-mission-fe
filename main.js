import axios from "axios";
import {} from "./ArticleService.js";
import { getProductList } from "./ProductService.js";


const res = getProductList(1, 1, 1)
res.then((data) => console.log(data)).catch((err) => console.error('err', error))

// async () => await getProductList
// console.log(await res())
// window.addEventListener('DOMContentLoaded', () => { console.log(async () => await getProductList(1, 1, 1))
// })