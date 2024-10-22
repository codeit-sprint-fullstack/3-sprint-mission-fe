import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';
import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';

// Product API 테스트
getProductList(1, 10, '')
  .then((data) => console.log('Product List:', data))
  .catch((error) => console.error('Error fetching product list:', error));

getProduct(1)
  .then((data) => console.log('Product:', data))
  .catch((error) => console.error('Error fetching product:', error));

createProduct('New Product', 'Product description', 100, ['tag1'], ['image1.png'])
  .then((data) => console.log('Product Created:', data))
  .catch((error) => console.error('Error creating product:', error));

// Article API 테스트
getArticleList(98, 10, '')
  .then((data) => console.log('Article List:', data))
  .catch((error) => console.error('Error fetching article list:', error));

getArticle(98)
  .then((data) => console.log('Article:', data))
  .catch((error) => console.error('Error fetching article:', error));
