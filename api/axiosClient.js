import { baseURL } from './config';
import { AxiosDefault } from './axiosDefault';

export const defaultAxios = AxiosDefault(baseURL);

export async function get(url, config = {}) {
  return defaultAxios.get(url, config);
}

export async function post(url, data = null, config = {}) {
  return defaultAxios.post(url, data, config);
}

export async function put(url, data = null, config = {}) {
  return defaultAxios.put(url, data, config);
}

export async function del(url, config = {}) {
  return defaultAxios.delete(url, config);
}

export async function patch(url, data = null, config = {}) {
  return defaultAxios.patch(url, data, config);
}
