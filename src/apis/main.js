import * as ArticleService from './service/ArticleService.js';
import * as ProductService from './service/ProductService.js';
import { fetchReq } from './fetch.js';
import assert from 'node:assert';

const getRandomCatImage = async () => {
  try {
    const res = await fetchReq('GET', 'https://api.thecatapi.com/v1/images/search');
    const src = await res.json();
    return src[0].url;
  } catch (error) {
    console.error('이미지 가져오기 실패:', error);
    return '';
  }
}
const testImgSrc = await getRandomCatImage();

const testQueryObj = () => {
  return {
    page: Math.floor(Math.random() * 10) + 1,
    pageSize: Math.floor(Math.random() * 10) + 1,
    keyword: 'test'
  }
};

const runTest = async (service, newEntity, updatedEntity, testQueryObj, serviceName) => {
  const testResults = [];

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  const logResult = (testName, passed, error = null) => {
    totalTests++;
    if (passed) passedTests++;
    if (!passed) failedTests++;
    testResults.push({ testName, passed, error });
  };

  console.log(`${serviceName} 테스트 시작`);

  for (const func of Object.keys(service)) {
    if (typeof service[func] !== 'function') continue;
    try {
      if (/(?=.*get)(?=.*list)/i.test(func)) {
        const res = await service[func](testQueryObj());
        assert(res.ok);
        logResult(`GET 리스트&쿼리 요청 성공(${func})`, true);
      }
      if (/create/.test(func)) {
        const res = await service[func](newEntity);
        assert(res.ok);
        logResult(`POST 생성 요청 성공(${func})`, true);
      }
      if ((/get(?!.*list)/i).test(func)) {
        try {
          const res = await service[func](-1);
          assert.fail('존재하지 않는 ID로 GET 요청했지만 성공 응답을 받았습니다.');
          logResult(`GET 존재하지 않는 ID(-1) 요청시 404 반환(${func})`, false);
        } catch (error) {
          logResult(`GET 존재하지 않는 ID(-1) 요청시 404 반환(${func})`, true);
        }
      }
      if ((/patch/).test(func)) {
        try {
          const res = await service[func](-1, updatedEntity);
          assert.fail('존재하지 않는 ID로 PATCH 요청했지만 성공 응답을 받았습니다.');
          logResult(`PATCH 존재하지 않는 ID(-1) 요청시 404 반환(${func})`, false);
        } catch (error) {
          logResult(`PATCH 존재하지 않는 ID(-1) 요청시 404 반환(${func})`, true);
        }
      }
      if ((/delete/).test(func)) {
        try {
          const res = await service[func](-1);
          assert(res.ok);
          logResult(`DELETE 존재하지 않는 ID(-1) 요청시 404 반환(${func})`, false);
        } catch (error) {
          logResult(`DELETE 존재하지 않는 ID(-1) 요청시 404 반환(${func})`, true);
        }
      }
    } catch (error) {
      logResult(func, false, error.message);
      console.error('에러 발생:', error);
    }
  }
  console.log(JSON.stringify({ totalTests, passedTests, failedTests, testResults }, null, 2));
  console.log(`${serviceName} 테스트 종료`);
  console.log('==========================================================');
};

const articleServiceTest = async () => {
  const newArticle = {
    title: `테스트 제목 ${new Date()}`,
    content: '테스트 내용',
    image: testImgSrc
  };

  const updatedArticle = {
    title: `수정된 제목 ${new Date()}`,
    content: '수정된 내용',
    image: '',
  };

  await runTest(ArticleService, newArticle, updatedArticle, testQueryObj, 'ArticleService');
};

const productServiceTest = async () => {
  const newProduct = {
    name: `테스트 상품 ${new Date()}`,
    description: '테스트 설명',
    price: 100,
    manufacturer: '테스트 제조사',
    tags: ['테스트'],
    images: [testImgSrc]
  };

  const updatedProduct = {
    name: `수정된 상품 ${new Date()}`,
    description: '수정된 설명',
    price: 2000,
    tags: ['테스트'],
    images: [''],
  };

  await runTest(ProductService, newProduct, updatedProduct, testQueryObj, 'ProductService');
};

await articleServiceTest();
await productServiceTest();