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



export { getProducts, getProductId, getArticles };