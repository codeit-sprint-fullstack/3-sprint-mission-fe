import axios from '@/lib/newAxios.js';

const getProducts = async (page = 0, pageSize = 10, order = 'recent') => {
  try {
    const { data } = await axios.get(`/products?page=${page}&pageSize=${pageSize}&orderBy=${order}`);
    return data;
  } catch (error) {
    console.log('Error fetching questions:');
  }
};

const getProductId = async (productId) => {
  try {
    const { data } = await axios.get(`/products/${productId}`);
    return data;
  } catch (error) {
    console.log('Error fetching questions:');
  }
};

const getQuestions = (productId) => {
  try {
    const { data } = axios.get(`/products/${productId}/comments?limit=4`)
    return data;
  } catch (error) {
    console.log('Error fetching questions:');
  }
};

const postQuestion = async (productId, content) => {
  try {
    const { data } = await axios.post(`/products/${productId}/comments`, {
      content,
    });
    return data;
  } catch (error) {
    console.log('Error fetching questions:');
  }
};

const deleteQuestion = async (questionId) => {
  try {
    const { data } = await axios.delete(`/comments/${questionId}`);
    return data;
  } catch (error) {
    console.log('Error fetching questions:');
  }
};

export {
  getProducts,
  getProductId,
  getQuestions,
  postQuestion,
  deleteQuestion
};
