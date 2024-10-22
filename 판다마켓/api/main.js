import { ArticleService } from "./services/ArticleService.js";
import { ProductService } from "./services/ProductService.js";




//articleservice
const getArticleList = await ArticleService.getArticleList(1, 10, "aa")
console.log(getArticleList)

const getArticle = await ArticleService.getArticle(2)
console.log(getArticle)

const createArticle = await ArticleService.createArticle('제목','내용2','sdf.jpg')
console.log(createArticle)

const patchArticle = await ArticleService.patchArticle('aaa','제목','내용2','sdf.jpg')
console.log(patchArticle)

const deleteArticle = await ArticleService.deleteArticle(764)
console.log(deleteArticle)




//productservice
const getProductList = await ProductService.getProductList(2, 2, "수정")
console.log(getProductList)

const getProduct = await ProductService.getProduct(2)
console.log(getProduct)

const createProduct = await ProductService.createProduct('수정','dd',123,'a',['asf'],['sef.jpg'])
console.log(createProduct)

const patchProduct = await ProductService.patchProduct(80, '수정', 'fff', '333', 'aaa', ['ssf'],['asf.jpg'])
console.log(patchProduct)

const deleteProduct = await ProductService.deleteProduct(370)
console.log(deleteProduct)

