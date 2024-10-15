import { get, post, del, patch } from '../utils/axiosClient.js';

// basic url 설정하기 ->dotenv로 설정하기 -> vanila js에서는 사용못하나..? 웹브라우저에서 찾을 수 없다고 나오네

// axios.get을 추상화해서 get()으로 사용하기
// interceptor를 사용해서 에러처리하기

// Q. 각 메서드별로 폴더 구조를 만들어야 할까? => 각 product별로 폴더를 만드는게 효율성이 좋을 것 같다.

// 게시글 목록 조회
const getArticleList = async (page = 1, pageSize = 100, keyword) => {
  if (keyword === undefined) {
    alert('keyword is required');
    return;
  }
  try {
    const response = await get(
      `/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 게시글 상세 조회
const getArticle = async (id) => {
  if (id === undefined) {
    alert('id is required'); // 유저한테 보여줌 -> x
    return;
  }

  try {
    const response = await get(`/articles/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 게시글 등록
const createArticle = async ({ title, content, image }) => {
  if (title === undefined || content === undefined || image === undefined) {
    alert('title, content, image is required');
    return;
  }

  const data = { title, content, image };

  try {
    const response = await post('/articles', data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 게시글 수정
const patchArticle = async (id, { title, content, image }) => {
  if (title === undefined && content === undefined && image === undefined) {
    alert('title, content, image is required');
    return;
  }

  const data = {};
  if (title !== undefined) data.title = title;
  if (content !== undefined) data.content = content;
  if (image !== undefined) data.image = image;

  try {
    const response = await patch(`/articles/${id}`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 게시글 삭제
const deleteArticle = async (id) => {
  if (id === undefined) {
    alert('id is required');
    return;
  }
  try {
    const response = await del(`/articles/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
