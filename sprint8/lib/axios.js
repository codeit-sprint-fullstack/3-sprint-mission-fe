import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://panda-market-be.onrender.com',
});

export default instance;