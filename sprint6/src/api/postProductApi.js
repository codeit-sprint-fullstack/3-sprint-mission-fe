import axios from 'axios';
import { postUrl } from './endpoint.js';

const postProduct = async (surveyData) => {
  if (typeof surveyData === 'object') {
    const res = await axios.post(postUrl, surveyData);
    return res.data;
  } else {
    console.error('Post error:');
    return;
  }
}

export default postProduct;