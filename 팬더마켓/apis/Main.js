import { getArticle, getArticleList, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import { getProduct, getProductList, createProduct, patchProduct, deleteProduct} from "./ProductService.js";


async function getArt(idNum) {
    const get = await getArticle(idNum);
    console.log(get);
    return get;
}
