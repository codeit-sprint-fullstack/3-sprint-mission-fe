// Import
import ArticleService from './ArticleService.js'
import ProductService from './ProductService.js'

// Article Service
const getArticleList = await ArticleService.getArticleList()
const getArticle = await ArticleService.getArticle()
const createArticle = await ArticleService.createArticle()
const patchArticle = await ArticleService.patchArticle()
const deleteArticle = await ArticleService.deleteArticle()

// Product Service
const getProductList = await ProductService.getProductList()
const getProduct = await ProductService.getProduct()
const createProduct = await ProductService.createProduct()
const patchProduct = await ProductService.patchProduct()
const deleteProduct = await ProductService.deleteProduct()
