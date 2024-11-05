import axios from 'axios';
import { postUrl } from './endpoint.js';

const postProduct = async (surveyData) => {
  const res = await axios.post(postUrl, surveyData);
  return res.data;
}

export default postProduct;