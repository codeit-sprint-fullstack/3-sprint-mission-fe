import axios from '@/lib/axios.js';

const getProducts = async (offset = 0, limit = 10, order = 'recent') => {
  try {
    const { data } = await axios.get(`/products?offset=${offset}&limit=${limit}&order=${order}`);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const getProductId = async (productId) => {
  try {
    const { data } = await axios.get(`/products/${productId}`);
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

const getArticles = async (offset = 0, limit = 3, order = 'recent') => {
  try {
    const { data } = await axios.get(`/articles?offset=${offset}&limit=${limit}&order=${order}`);
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

const postArticle = async (title, content) => {
  try {
    const { data } = await axios.post('/articles', {
      title,
      content,
    });
    return data;
  } catch (error) {
    console.error('Error posting article:', error.response?.data || error.message);
    throw error;
  }
};

const getArticleId = async (articleId) => {
  try {
    const { data } = await axios.get(`/articles/${articleId}`);
    return data;
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    throw error;
  }
};

const getComments = async (articleId) => {
  try {
    const { data } = await axios.get(`/articles/${articleId}/comments`);
    return data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

// 게시글 댓글 등록
// app.post('/articles/:articleId/comments',
const postComment = async (articleId, content) => {
  try {
    const { data } = await axios.post(`/articles/${articleId}/comments`, {
      content,
    });
    return data;
  } catch (error) {
    console.error('Error posting comment:', error.response?.data || error.message);
    throw error;
  }
};


export { getProducts, getProductId, getArticles, postArticle, getArticleId, getComments, postComment };
