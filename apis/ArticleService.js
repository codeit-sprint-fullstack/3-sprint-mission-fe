import { API, ARTICLES, getArticleListParams, ARTICLE } from './constants.js';

export const getArticleList = async () => {
  console.log(`상품 목록 조회`);
  const response = await API.get(ARTICLES, {
    params: getArticleListParams(),
  });
  console.log(response);
};
export const getArticle = async id => {};
export const createArticle = async article => {};
export const patchArticle = async (id, article) => {};
export const deleteArticle = async id => {};

const URL = `https://learn.codeit.kr/api/color-surveys`;
const POST_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const POST_FAIL_MESSAGE = `등록에 실패했습니다. HTTP 상태 코드: `;
const GET_FAIL_MESSAGE = `불러오기에 실패했습니다. HTTP 상태 코드: `;
const API_CALL_DATETIME = Intl.DateTimeFormat('ko-KR', {
  dateStyle: 'full',
  timeStyle: 'medium',
  // year: 'numeric',
  // month: 'long',
  hour12: false,
  timeZone: 'Asia/Seoul',
}).format(new Date());

export const register = async params => {
  let httpStatus;
  return await fetch(URL, { ...POST_OPTIONS, body: JSON.stringify(params) })
    .then(response => {
      if (!response.ok) throw new Error(POST_FAIL_MESSAGE, response.status);
      httpStatus = response.status;
      return response.json();
    })
    .then(data => {
      console.log(`전송된 데이터 : ${JSON.stringify(data)}`);
      return {
        status: httpStatus,
        data: data,
      };
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log(`${API_CALL_DATETIME}에 코드잇 API를 호출하였습니다.`);
    });
};

export const retrieveAll = async () => {
  let httpStatus;
  return await fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error(GET_FAIL_MESSAGE, response.status);
      httpStatus = response.status;
      return response.json();
    })
    .then(data => {
      // console.log(`전송된 데이터 : ${JSON.stringify(data)}`);
      return {
        status: httpStatus,
        data: data,
      };
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log(`${API_CALL_DATETIME}에 코드잇 API를 호출하였습니다.`);
    });
};

export const retrieve = async id => {
  let httpStatus;
  return await fetch(`${URL}/${id}`)
    .then(response => {
      if (!response.ok) throw new Error(GET_FAIL_MESSAGE, id, response.status);
      httpStatus = response.status;
      return response.json();
    })
    .then(data => {
      console.log(`전송된 데이터 : ${JSON.stringify(data)}`);
      return {
        status: httpStatus,
        data: data,
      };
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log(`${API_CALL_DATETIME}에 코드잇 API를 호출하였습니다.`);
    });
};
