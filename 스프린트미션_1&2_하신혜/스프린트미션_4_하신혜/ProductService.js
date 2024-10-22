import axios from 'axios';

const BASE_URL = 'https://sprint-mission-api.vercel.app/products';

export const getProductList = async (page, pageSize, keyword) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: { page, pageSize, keyword }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching product list: ${error.response?.statusText || error.message}`);
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product: ${error.response?.statusText || error.message}`);
    throw error;
  }
};

export const createProduct = async (name, description, price, tags, images) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      name,
      description,
      price,
      tags,
      images
    });
    return response.data;
  } catch (error) {
    console.error(`Error creating product: ${error.response?.statusText || error.message}`);
    throw error;
  }
};

export const patchProduct = async (id, updates) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, updates);
    return response.data;
  } catch (error) {
    console.error(`Error patching product: ${error.response?.statusText || error.message}`);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product: ${error.response?.statusText || error.message}`);
    throw error;
  }
};
