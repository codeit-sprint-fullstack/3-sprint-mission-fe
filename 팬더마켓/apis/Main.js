import { getArticle, getArticleList, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import { getProduct, getProductList, createProduct, patchProduct, deleteProduct} from "./ProductService.js";


async function getArt(idNum) {
    const get = await getArticle(idNum);
    console.log(get);
    return get;
}

const tag = [1, 2, 3];
const img = [4,5,6];

const pat = await patchProduct(19, "이름", "내용", "99", tag, img);
console.log(pat);