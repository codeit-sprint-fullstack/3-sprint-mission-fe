export const BASE_URL = new URL('https://sprint-mission-api.vercel.app/');

export const get = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Network response was not ok: ', response.json());
    }
    return response;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

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
      throw new Error('Network response was not ok:', response.json());
    }
    return response;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', method, error);
  }
};
