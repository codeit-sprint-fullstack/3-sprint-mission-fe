export const BASE_URL = new URL('https://sprint-mission-api.vercel.app/');

/**
 *
 * @param { 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' } method
 * @param { string } path
 * @param { * } payload
 * @returns {Promise<Response>} The fetch response
 * @throws {Error} When the network response is not ok
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
    const response = await fetch(new URL(path, BASE_URL), options);
    if (!response.ok) {
      throw new Error(`HTTP error status ${response?.status}`);
    }
    return response;
  } catch (error) {
    throw new Error("Fetch request failed", { cause: error });
  }
};
