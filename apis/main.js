import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';
import { formattedDate } from './util.js';

await getArticleList();
console.log('---------------------------------');
