export const BASE_URL = new URL('https://sprint-mission-api.vercel.app/');

/**
 *
 * @param { 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' } method
 * @param { string } path
 * @param { * } payload
 * @returns
 */

export const fetchReq = async (method, path, payload) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload ? JSON.stringify(payload) : null,
  };
  try {
    const response = await fetch(path, options);
    if (!response.ok) {
      throw new Error();
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};
