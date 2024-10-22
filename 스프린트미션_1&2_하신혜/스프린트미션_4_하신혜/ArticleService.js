const BASE_URL = 'https://sprint-mission-api.vercel.app/articles';

export const getArticleList = (page, pageSize, keyword) => {
  return fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching article list: ${error.message}`);
    });
};

export const getArticle = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching article: ${error.message}`);
    });
};

export const createArticle = (title, content, image) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, content, image })
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error creating article: ${error.message}`);
    });
};

export const patchArticle = (id, updates) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error patching article: ${error.message}`);
    });
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error deleting article: ${error.message}`);
    });
};
