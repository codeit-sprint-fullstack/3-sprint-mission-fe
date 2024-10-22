# 판다마켓 API 명세서

## API BASE URL

- API 주소 : <https://sprint-mission-api.vercel.app>

## 상품(Product) API

### GET /products

- 상품 목록을 조회하는 API Endpoint 입니다.

#### GET /products Requests(요청)

##### GET /products Parameters(매개변수)

- page(페이지 번호) : 기본값 1
- pageSize(페이지 당 상품 수) : 기본값 10
- orderBy(정렬 기준) : 기본값 recent
  - recent : 최근 등록 순으로 정렬
  - favorite : 좋아요 순으로 정렬
- keyword(검색 키워드) : 기본값 없음(빈 String)

#### GET /products Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "totalCount": 0,
  "list": [
    {
      "createdAt": "2024-10-17T07:07:20.373Z",
      "favoriteCount": 0,
      "ownerNickname": "string",
      "ownerId": 1,
      "images": ["https://example.com/..."],
      "tags": ["전자제품"],
      "price": 0,
      "description": "string",
      "name": "상품 이름",
      "id": 1
    }
  ]
}
```

### POST /products

- 상품 목록을 등록하는 API Endpoint입니다.

#### POST /products Requests(요청)

##### POST /products Parameters(매개변수)

- 없음

##### POST /products Body(요청 데이터)

- 필수값

```json
{
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름"
}
```

#### POST /products Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "createdAt": "2024-10-17T07:13:48.599Z",
  "favoriteCount": 0,
  "ownerNickname": "string",
  "ownerId": 1,
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름",
  "id": 1
}
```

### GET /products/{productId}

- 상품 상세 정보를 조회하는 API Endpoint 입니다.

#### GET /products/{productId} Requests(요청)

##### GET /products/{productId} Parameters(매개변수)

- productId(상품 ID) : 기본값 없음, 숫자, 필수값

#### GET /products/{productId} Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "createdAt": "2024-10-17T07:20:03.558Z",
  "favoriteCount": 0,
  "ownerNickname": "string",
  "ownerId": 1,
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름",
  "id": 1,
  "isFavorite": true
}
```

- HTTP 응답 코드 : 404 Not Found
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```

### PATCH /products/{productId}

- 상품 상세 정보를 수정하는 API Endpoint 입니다.

#### PATCH /products/{productId} Requests(요청)

##### PATCH /products/{productId} Parameters(매개변수)

- productId(상품 ID) : 기본값 없음, 숫자, 필수값

##### PATCH /products/{productId} Body(요청 데이터)

- 필수값

```json
{
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름"
}
```

#### PATCH /products/{productId} Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "createdAt": "2024-10-17T07:25:14.625Z",
  "favoriteCount": 0,
  "ownerNickname": "string",
  "ownerId": 1,
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름",
  "id": 1,
  "isFavorite": true
}
```

- HTTP 응답 코드 : 403 Forbidden
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```

- HTTP 응답 코드 : 404 Not Found
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```

### DELETE /products/{productId}

- 상품 상세 정보를 삭제하는 API Endpoint 입니다.

#### DELETE /products/{productId} Requests(요청)

##### DELETE /products/{productId} Parameters(매개변수)

- productId(상품 ID) : 기본값 없음, 숫자, 필수값

#### DELETE /products/{productId} Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "id": 0
}
```

- HTTP 응답 코드 : 403 Forbidden
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```

- HTTP 응답 코드 : 404 Not Found
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```

### POST /products/{productId}/favorite

- 해당 상품의 좋아요를 등록하는 API Endpoint 입니다.

#### POST /products/{productId}/favorite Requests(요청)

##### POST /products/{productId}/favorite Parameters(매개변수)

- productId(상품 ID) : 기본값 없음, 숫자, 필수값

#### POST /products/{productId}/favorite Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "createdAt": "2024-10-17T07:32:07.668Z",
  "favoriteCount": 0,
  "ownerNickname": "string",
  "ownerId": 1,
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름",
  "id": 1,
  "isFavorite": true
}
```

- HTTP 응답 코드 : 404 Not Found
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```

### DELETE /products/{productId}/favorite

- 해당 상품의 좋아요를 취소하는 API Endpoint 입니다.

#### DELETE /products/{productId}/favorite Requests(요청)

##### DELETE /products/{productId}/favorite Parameters(매개변수)

- productId(상품 ID) : 기본값 없음, 숫자, 필수값

#### DELETE /products/{productId}/favorite Responses(응답)

- HTTP 응답 코드 : 200 OK
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "createdAt": "2024-10-17T07:34:11.180Z",
  "favoriteCount": 0,
  "ownerNickname": "string",
  "ownerId": 1,
  "images": ["https://example.com/..."],
  "tags": ["전자제품"],
  "price": 0,
  "description": "string",
  "name": "상품 이름",
  "id": 1,
  "isFavorite": true
}
```

- HTTP 응답 코드 : 404 Not Found
- 미디어 타입 : application/json
- 예상 응답값

```json
{
  "message": "string"
}
```
