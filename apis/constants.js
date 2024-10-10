// API BASE_URL과 API Endpoint를 정의
export const BASE_URL = `https://sprint-mission-api.vercel.app`;
export const ARTICLES = `/articles`;
export const ARTICLE = id => `/articles/${id}`;
export const PRODUCTS = `/products`;
export const PRODUCT = id => `/products/${id}`;
export const ENDPOINTS = { ARTICLES, ARTICLE, PRODUCTS, PRODUCT };

// 게시글 목록 조회 GET(/article)에 들어갈 파라미터 기본값 생성
export const getArticleListParams = (page = 1, pageSize = 20, keyword = '') => ({ page, pageSize, keyword });

// 상품 등록 POST(/products)에 들어갈 파라미터 기본값 생성
export const createProductParams = (name = '', description = '', price = 0, tags = [], images = []) => ({
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
  return axiosClient;
};
export const API = createAxiosClient();

export const responseMessages = service => ({
  GET: {
    200: `정상적으로 ${service} 데이터를 불러왔습니다.`,
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
