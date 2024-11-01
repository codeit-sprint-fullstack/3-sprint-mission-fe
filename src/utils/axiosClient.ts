import { AxiosDefault } from './axiosDefault.ts';

export const BASE_URL = 'https://panda-market-api.vercel.app';
export const defaultAxios = AxiosDefault(BASE_URL);

export async function get(url: string, config = {}) {
  return defaultAxios.get(url, config);
}

export async function post(url: string, data = null, config = {}) {
  return defaultAxios.post(url, data, config);
}

export async function put(url: string, data = null, config = {}) {
  return defaultAxios.put(url, data, config);
}

export async function del(url: string, config = {}) {
  return defaultAxios.delete(url, config);
}

export async function patch(url: string, data = null, config = {}) {
  return defaultAxios.patch(url, data, config);
}
