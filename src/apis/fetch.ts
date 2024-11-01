export const BASE_URL = new URL('https://panda-market-api.vercel.app/');

type FetchReqPrams = {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path: string;
  payload?: Record<string, unknown>;
}

export const fetchReq = async (params: FetchReqPrams) => {
  const { method, path, payload } = params;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'cors': 'no-cors',
    },
    body: payload ? JSON.stringify(payload) : null,
  };
  try {
    const response = await fetch(path, options);
    if (!response.ok) {
      throw new Error(`HTTP error status ${response?.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error)
  }
};