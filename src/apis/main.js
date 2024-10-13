import * as ArticleService from './service/ArticleService.js';
import * as ProductService from './service/ProductService.js';
import { get } from './fetch.js';

const getRandomCatImage = async () => {
  const res = await get('https://api.thecatapi.com/v1/images/search');
  const src = await res.json();
  return src[0].url;
}

const testImgSrc = await getRandomCatImage();

const testServices = async () => {
  try {
    console.log('ArticleService 테스트 시작');
    const articleList = await ArticleService.getArticleList();
    console.log('getArticleList:', articleList);
    console.log('=====================================')

    const newArticle = { title: `'테스트 제목 ${new Date()}`, content: '테스트 내용', image: testImgSrc };
    const createdArticle = (await ArticleService.createArticle(newArticle));
    console.log('createArticle:', createdArticle);
    const data = await createdArticle.json();
    const articleId = data.id;
    console.log('==================================================');

    const articleDetail = await ArticleService.getArticle(articleId);
    console.log('getArticle:', articleDetail);
    console.log('==================================================')

    const updatedArticle = {
      title: `수정된 제목 ${new Date()}`,
      content: '수정된 내용',
      image: '',
    };
    const patchedArticle = await ArticleService.patchArticle(articleId, updatedArticle);
    console.log('patchArticle:', patchedArticle);
    console.log('==================================================')

    const deletedArticle = await ArticleService.deleteArticle(articleId);
    console.log('deleteArticle:', deletedArticle);
  } catch (error) {
    console.error('에러 발생:', error);
  }

  try {
    console.log('ProductService 테스트 시작');
    console.log('==================================================');

    const productList = await ProductService.getProductList();
    console.log('getProductList:', productList);
    console.log('==================================================');

    const newProduct = {
      name: `테스트 상품 ${new Date()}`,
      description: '테스트 설명',
      price: 100,
      manufacturer: '테스트 제조사',
      tags: [
        '테스트'
      ],
      images: [
        testImgSrc
      ]
    }

    const createdProduct = await ProductService.createProduct(newProduct);
    console.log('createProduct:', createdProduct);
    console.log('==================================================');

    const data = await createdProduct.json();
    const productId = data.id; // 테스트용 ID
    console.log('productId', productId)

    const productDetail = await ProductService.getProduct(productId);
    console.log('getProduct:', productDetail);
    console.log('==================================================');

    const updatedProduct = {
      name: `수정된 상품 ${new Date()}`,
      description: '수정된 설명',
      price: 2000,
      tags: ['테스트'],
      images: [''],
    };
    const patchedProduct = await ProductService.patchProduct(productId, updatedProduct);
    console.log('patchProduct:', patchedProduct);
    console.log('==================================================');

    const deletedProduct = await ProductService.deleteProduct(productId);
    console.log('deleteProduct:', deletedProduct);
  } catch (error) {
    console.error('에러 발생:', error);
  }
};

testServices();
