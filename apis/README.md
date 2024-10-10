# 스프린트 미션 4 요구사항 확인

스프린트 미션 4의 요구사항은 두 가지 주요 API(Article API와 Product API)를 사용하여 다양한 CRUD(생성, 읽기, 업데이트, 삭제) 기능을 구현하는 것입니다.

- [API 명세 확인하러 가기](https://sprint-mission-api.vercel.app/docs/)

위 명세를 참고해 아래 요구사항에 따라 함수들을 구현하세요.

# 요구사항

## 기본 요구사항

**공통**

- [ ] Github에 스프린트 미션 PR을 만들어 주세요.

- [x] '[https://sprint-mission-api.vercel.app/articles](https://sprint-mission-api.vercel.app/articles)' API를 이용하여 아래 함수들을 구현해 주세요.
    - [x] `getArticleList()` : GET 메서드를 사용해 주세요.
        - [x] `page`, `pageSize`, `keyword` 쿼리 파라미터를 이용해 주세요.
    - [x] `getArticle()` : GET 메서드를 사용해 주세요.
    - [x] `createArticle()` : POST 메서드를 사용해 주세요.
        - [x] request body에 `title`, `content`, `image` 를 포함해 주세요.
    - [x] `patchArticle()` : PATCH 메서드를 사용해 주세요.
    - [x] `deleteArticle()` : DELETE 메서드를 사용해 주세요.

- [x] `fetch` 혹은 `axios` 를 이용해 주세요.
    - [x] 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
- [x] `.then()` 메서드를 이용하여 비동기 처리를 해주세요.

- [x] `.catch()` 를 이용하여 오류 처리를 해주세요.

- [ ] '[https://sprint-mission-api.vercel.app/products](https://sprint-mission-api.vercel.app/products)' API를 이용하여 아래 함수들을 구현해 주세요.
    - [ ] `getProductList()` : GET 메서드를 사용해 주세요.
        - [x] `page`, `pageSize`, `keyword` 쿼리 파라미터를 이용해 주세요.
    - [ ] `getProduct()` : GET 메서드를 사용해 주세요.
    - [ ] `createProduct()` : POST 메서드를 사용해 주세요.
        - [ ] request body에 `name`, `description`, `price`, `tags`, `images` 를 포함해 주세요.
    - [ ] `patchProduct()` : PATCH 메서드를 사용해 주세요.
    - [ ] `deleteProduct()` : DELETE 메서드를 사용해 주세요.

- [ ] `async/await` 을 이용하여 비동기 처리를 해주세요.

- [ ] `try/catch` 를 이용하여 오류 처리를 해주세요.

- [ ] 구현한 함수들을 아래와 같이 파일을 분리해 주세요.
    - [ ] `export`를 활용해 주세요.
    - [ ] `ProductService.js` 파일 Product API 관련 함수들을 작성해 주세요.
    - [ ] `ArticleService.js` 파일에 Article API 관련 함수들을 작성해 주세요.

- [ ] 이외의 코드들은 모두 `main.js` 파일에 작성해 주세요.
    - [ ] `import`를 활용해 주세요.
    - [ ] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.