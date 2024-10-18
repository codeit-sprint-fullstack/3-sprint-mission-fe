import {getArticleList, getArticle, createArticle, patchArticle, deleteArticle} from './ArticleService.js'
import {getProductList,getProduct,createProduct,patchProduct,deleteProduct} from './ProductService.js'

getArticleList(1, 10, '테스트');
getArticle(198);

const articlePost = {
    
    "title": "",
    "content": "",
    "image": "",
    
};
// VS코드 내에서는 생성완료라고 뜨는데 페이지 주소에 가면 생성된 값이 왜 나오지않는건가요..?

createArticle(articlePost);

const updateData = {
    title: '수정된 게시물 제목'
};
patchArticle(3, updateData);

deleteArticle(98);

