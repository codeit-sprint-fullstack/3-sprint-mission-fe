import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from './service/ArticleService.js';

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from './service/ProductService.js';

const runArticleServiceAPIs = async () => {
  // 게시글 조회
  const article = await getArticle(137);
  console.log('getArticle', article);

  console.log(
    await getArticle(137)
      .then((res) => res.data)
      .catch((err) => console.error(err))
  );

  // 새 게시글 생성
  const newArticle = await createArticle({
    title: '새 제목',
    content: '새 내용',
    image: '새_이미지_주소.jpg',
  });
  console.log('createArticle', newArticle);

  // 게시글 목록 조회
  const articleList = await getArticleList(1, 10, '키워드');
  console.log('getArticleList', articleList);

  // 게시글 수정
  const updatedArticle = await patchArticle(137, {
    title: '수정된 제목',
    content: '수정된 내용',
    image: '수정된_이미지_주소.jpg',
  });
  console.log('patchArticle', updatedArticle);

  // 게시글 삭제
  // const deleteResult = await deleteArticle(216);
  // console.log('게시글 삭제 결과:', deleteResult);
};

const runProductServiceAPIs = async () => {
  // 상품 조회
  const product = await getProduct(200);
  console.log('getProduct', product);

  // 새 상품 생성
  const newProduct = await createProduct({
    name: '새 상품',
    description: '새 상품 설명',
    price: 10000,
    tags: ['태그1', '태그2'],
    images: ['새_이미지_주소.jpg'],
  });
  console.log('createProduct', newProduct);

  // 상품 목록 조회
  const productList = await getProductList(1, 10, '키워드');
  console.log('getProductList', productList);

  // 상품 수정
  const updatedProduct = await patchProduct(137, {
    name: '수정된 상품 이름',
    description: '수정된 상품 설명',
    price: 12000,
    tags: ['수정된 태그1'],
    images: ['수정된_이미지_주소.jpg'],
  });
  console.log('patchProduct', updatedProduct);

  // 상품 삭제
  // const deleteResult = await deleteProduct(216);
  // console.log('deleteProduct', deleteResult);
};

runArticleServiceAPIs();
runProductServiceAPIs();
