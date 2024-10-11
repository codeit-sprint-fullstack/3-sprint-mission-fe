// API BASE_URL과 API Endpoint를 정의
export const BASE_URL = `https://sprint-mission-api.vercel.app`;
export const ARTICLES = `/articles`;
export const ARTICLE = (id) => `/articles/${id}`;
export const PRODUCTS = `/products`;
export const PRODUCT = (id) => `/products/${id}`;
export const ENDPOINTS = { ARTICLES, ARTICLE, PRODUCTS, PRODUCT };

// 게시글 목록 조회 GET(/article)에 들어갈 파라미터 기본값 생성
export const getArticleListParams = (
  page = 1,
  pageSize = 20,
  keyword = ""
) => ({ page, pageSize, keyword });

// 상품 등록 POST(/products)에 들어갈 파라미터 기본값 생성
export const createProductParams = (
  name = "",
  description = "",
  price = 0,
  tags = [],
  images = []
) => ({
  name,
  description,
  price,
  tags,
  images,
});

// Singleton 패턴을 이용, API 인스턴스를 하나만 생성해서 사용할 것임
let axiosClient = null;
const createAxiosClient = () => {
  if (!axiosClient) {
    axiosClient = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
    });
  }

  // 요청 인터셉터 추가(토큰 전처리, 로깅 등에 많이 사용함)
  axiosClient.interceptors.request.use(
    (config) => {
      // FIXME: 현재는 백엔드 서버가 없어서 프론트에서 토큰을 생성해서 동작을 확인할 수 있도록 함

      // 요청을 보내기 전에 수행할 작업
      console.log("Request Interceptor:", config);

      // 예: 인증 토큰 추가(토큰 없이 요청 시 401 에러 발생)
      const httpMethod = config.method.toUpperCase();
      const service = config.url.split("/").pop();
      const message = responseMessages(service)[httpMethod][200];
      const token = localStorage.getItem("token");
      if (!token) {
        console.log(message);
        return Promise.reject(message);
      }

      config.headers.Authorization = `Bearer ${token}`;
      config.headers["X-Powered-By"] = `HyeonWoo's Sprint Mission API`;
      console.log(`요청 보냄: ${config.url}`);
      console.log(`요청 크리덴셜: ${config.headers.Authorization}`);
      return config;
    },
    (error) => {
      // 요청 에러가 발생했을 때 수행할 작업
      console.error(`요청 에러: ${error}`);
      const httpMethod = error.config.method.toUpperCase();
      const httpStatus = error.response.status;
      const service = error.config.url.split("/").pop();
      const message = error.response.data.message;
      console.log(message);
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터 추가
  axiosClient.interceptors.response.use(
    (response) => {
      // 응답 시 응답 메시지 출력
      const httpMethod = response.config.method.toUpperCase();
      const httpStatus = response.status;
      const service = response.config.url.split("/").pop();
      const message = responseMessages(service)[httpMethod][httpStatus];
      console.log(message);
      console.log(`응답 URL: ${response.config.url}`);
      return response;
    },
    (error) => {
      // 응답 에러가 발생했을 때 수행할 작업
      // console.error(`응답 에러: ${error}`);
      const httpMethod = error.config.method.toUpperCase();
      const httpStatus = error.response.status;
      const service = error.config.url.split("/").pop();
      const message = responseMessages(service)[httpMethod][httpStatus];
      console.log(
        `응답 에러[${httpMethod} 요청/${httpStatus} 코드]: ${message}`
      );
      return Promise.reject(error);
    }
  );
  return axiosClient;
};
export const API = createAxiosClient();

// const removeInterceptors = () => {
//   API.interceptors.request.eject(requestInterceptor);
//   API.interceptors.response.eject(responseInterceptor);
// }

// JWT 토큰 생성
export const createJwt = (payload) => {
  // 검증용 encoded jwt 데이터
  /* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb2RlaXRTcHJpbnQ0IiwibmFtZSI6Ikh5ZW9uV29vIExlZSIsImlhdCI6MTcyODYyMDM0NX0.gNl1tFknVxAKAdO2cdO3hHL3KqiVa24ibg4kKrboTWk */
  const header = { alg: "HS256", typ: "JWT" };
  const secret = `codeit-sprint-mission-4`;
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = btoa(
    CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, secret)
  );
  console.log(`${encodedHeader}.${encodedPayload}.${signature}`);
  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

export const responseMessages = (service) => ({
  GET: {
    200: `정상적으로 ${service} 데이터를 불러왔습니다.`,
    401: `인증이 필요한 ${service} 데이터입니다.`,
    404: `요청하신 ${service} 데이터를 찾을 수 없습니다.`,
    500: `서버에 문제가 있어 ${service} 데이터를 가져오지 못했습니다.`,
  },
  POST: {
    201: `정상적으로 ${service} 데이터를 등록했습니다.`,
    400: `등록할 ${service} 데이터 형식이 올바르지 않습니다.`,
    500: `서버에 문제가 있어 ${service} 데이터를 등록하지 못했습니다.`,
  },
  PATCH: {
    200: `정상적으로 ${service} 데이터를 수정했습니다.`,
    400: `수정할 ${service} 데이터 형식이 올바르지 않습니다.`,
    404: `수정할 ${service} 데이터를 찾을 수 없습니다.`,
  },
  DELETE: {
    204: `정상적으로 ${service} 데이터를 삭제했습니다.`,
    403: `${service} 데이터를 삭제할 권한이 없습니다.`,
    404: `삭제할 ${service} 데이터를 찾을 수 없습니다.`,
  },
});
