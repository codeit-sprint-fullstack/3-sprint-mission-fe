# 요구사항

## 기본 요구사항

### 공통

- [x] Github에 스프린트 미션 PR을 만들어 주세요.
- [x] React를 사용해 진행합니다.

### 중고마켓 페이지

- [x] PC, Tablet, Mobile 디자인에 해당하는 중고마켓 페이지를 만들어 주세요.
- [x] 중고마켓 페이지 url path는 별도로 설정하지 않고, ‘/’에 보이도록 합니다.
- [x] 상품 데이터는 https://panda-market-api.vercel.app/docs/에 명세된 GET 메소드 “/products” 를 사용해주세요.
- [x] 상단 네비게이션 바, 푸터는 랜딩 페이지와 동일한 스타일과 규칙으로 만들어주세요.
- [x] 상품 데이터는 https://panda-market-api.vercel.app/docs/에 명세된 GET 메소드 “/products” 를 활용해주세요.
- [x] 상품 목록 페이지네이션 기능을 구현합니다.
- [x] 드롭 다운으로 “최신 순” 또는 “좋아요 순”을 선택해서 정렬을 구현하세요.
- [x] 상품 목록 검색 기능을 구현합니다.
- [x] 베스트 상품 데이터는 https://panda-market-api.vercel.app/docs/에 명세된 GET 메소드 “/products”의 정렬 기준 favorite을 사용해주세요.

## 심화 요구사항

### 공통

- [ ] 커스텀 hook을 만들어 필요한 곳에 활용해 보세요.

### 중고마켓 페이지

- [x] 중고 마켓의 카드 컴포넌트 반응형 기준은 다음과 같습니다.
- 베스트 상품
  - Desktop : 4열
  - Tablet : 2열
  - Mobile : 1열
- 전체 상품
  - Desktop : 5열
  - Tablet : 3열
  - Mobile : 2열
- 반응형에 따른 페이지 네이션 기능을 구현합니다.
- 반응형으로 보여지는 물품들의 개수를 다르게 설정할때 서버에 보내는 pageSize값을 적절하게 설정합니다.
