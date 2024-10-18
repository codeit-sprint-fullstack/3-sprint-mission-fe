import { getArticle, getArticleList, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import { getProduct, getProductList, createProduct, patchProduct, deleteProduct} from "./ProductService.js";


//articleServie
async function getArt(idNum) {
    const get = await getArticle(idNum);
    console.log(get);
}

async function getArtList(page, pageSize, keyword) {
    const get = await getArticleList (page, pageSize, keyword);
    console.log(get);
}

async function createArt(title, content, image) {
    const get = await getArticle(title, content, image);
    console.log(get);
}

async function patchArt(idNum, title, content, image) {
    const get = await patchArticle(idNum, title, content, image);
    console.log(get);
}

async function delArt(idNum) {
    const get = await deleteArticle(idNum);
    console.log(get);
}

getArt(820);
getArtList(1, 100, 'new');
createArt(`new`, 'new content', 'new image');
patchArt(820, 'edit', 'edit content', 'edit image');
delArt(820);

//productService
async function getPro(idNum) {
    const get = await getProduct(idNum);
    console.log(get);
}

async function getProList(page, pageSize, keyword) {
    const get = await getProductList (page, pageSize, keyword);
    console.log(get);
}

async function createPro(name, description, price, tags,images) {
    const get = await createProduct(name, description, price, tags,images);
    console.log(get);
}

async function patchPro(idNum, name, description, price, tags,images) {
    const get = await patchProduct(idNum, name, description, price, tags,images);
    console.log(get);
}

async function delPro(idNum) {
    const get = await deleteProduct(idNum);
    console.log(get);
}

getPro(45);
getProList(1, 100, '새');
createPro('product', 'product description', 'product price',['1','2'], ['img']);
patchPro(45,'product', 'product description', 'product price',['1','2'], ['img']);
delPro(216);