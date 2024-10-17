import axios from "axios";

//DELETE method는 삭제하여 보낼 데이터가 없기때문에 headers, body 옵션이 필요가 없을까??......

//getArticleList의 GET method
export async function getArticleList(page, pageSize, keyword) {
  const url = new URL("https://sprint-mission-api.vercel.app/articles?");
  url.searchParams.append("page", page); //같은 값은 page 한개만 써도 됨
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("keyword", keyword);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}

async function getArticleList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
    // console.log('error', error)
  }
}

// fetch
const getArticleList = await fetch(
  `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error", error.result.status);
    // .catch(error => { console.error('error', error.result.status) });
  });

//axios
const getArticleList = async (page, pageSize, keyword) => {
  try {
    axios({
      method: "GET",
      url: `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = await axios.get(
      `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    console.log(response);
    return response.data;
    // return (await response).data;
  } catch (error) {
    console.log("error", error);
    // console.error('Error', error.response)
    // const statusCode = error.response.status
    // const statusText = error.response.statusText
    // const message = error.response.data.message[0];
    // console.log(`${statusCode} - ${statusText} - ${message}`)
  }
};

// ==============================================================================================================================

//getArticle의 GET method
export async function getArticle(id) {
  const url = new URL("https://sprint-mission-api.vercel.app/articles/");
  url.searchParams.append("id", id);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}

async function getArticle(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/articles/${id}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
    // console.log('error', error)
  }
}

//fetch
const getArticle = await fetch(
  `https://sprint-mission-api.vercel.app/articles/${id}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error", error.result.status);
    // .catch(error => { console.error('error', error.result.status) });
  });

//axios
const getArticle = async (id) => {
  try {
    axios({
      method: "GET",
      url: `https://sprint-mission-api.vercel.app/articles/${id}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.get(
      `https://sprint-mission-api.vercel.app/articles/${id}`
    );
    console.log(response);
    return response.data;
    // return (await response).data;
  } catch (error) {
    console.log("error", error);
    // console.error('Error', error.response)
    // const statusCode = error.response.status
    // const statusText = error.response.statusText
    // const message = error.response.data.message[0];
    // console.log(`${statusCode} - ${statusText} - ${message}`)
  }
};

// ==============================================================================================================================

// // //getArticle의 POST method 사용
export async function createArticle() {
  const url = new URL("https://sprint-mission-api.vercel.app/articles?");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "string",
        content: "string",
        image: "string",
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}

//Article의 POST method의 body데이터
// const getArticleBody = {
//   title: "string",
//   content: "string",
//   image: "string",
// };

async function createArticle() {
  const response = await fetch(
    "https://sprint-mission-api.vercel.app/articles?",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "string",
        content: "string",
        image: "string",
      }),
    }
  );
  const data = console.log(response);
  return data;
}

async function createArticle() {
  try {
    const response = await fetch(
      "https://sprint-mission-api.vercel.app/articles?",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "string",
          content: "string",
          image: "string",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error", error);
    // console.log('error', error)
  }
}

//fetch
const createArticle = await fetch(
  "https://sprint-mission-api.vercel.app/articles?",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "string",
      content: "string",
      image: "string",
    }),
  }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error", error.result.status);
    // .catch(error => { console.error('error', error.result.status) });
  });

//axios
const createArticle = async () => {
  try {
    axios({
      method: "POST",
      url: "https://sprint-mission-api.vercel.app/articles?",
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.post(
      "https://sprint-mission-api.vercel.app/articles?",
      {
        title: "string",
        content: "string",
        image: "string",
      }
    );
    console.log(response);
    return response.data;
    // return (await response).data;
  } catch (error) {
    console.log("error", error);
    // console.error('Error', error.response)
    // const statusCode = error.response.status
    // const statusText = error.response.statusText
    // const message = error.response.data.message[0];
    // console.log(`${statusCode} - ${statusText} - ${message}`)
  }
};

// ==============================================================================================================================

// //patchArticle의 PATCH method 사용
export async function patchArticle(id) {
  const url = new URL("https://sprint-mission-api.vercel.app/articles/");
  url.searchParams.append("id", id);
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "string",
        content: "string",
        image: "string",
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}

// //Article의 PATCH method의 body데이터
// export const patchArticleBody = {
//   title: "string",
//   content: "string",
//   image: "string",
// };

async function patchArticle(id) {
  // const body = patchArticleBody;
  const response = await fetch(
    `https://sprint-mission-api.vercel.app/articles/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "string",
        content: "string",
        image: "string",
      }),
    }
  );
  const data = await response.json();
  return data;
}

async function patchArticle(id) {
  try {
    // const body = patchArticleBody;
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/articles/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "string",
          content: "string",
          image: "string",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error", error);
    // console.log('error', error)
  }
}

//fetch
const patchArticle = await fetch(
  `https://sprint-mission-api.vercel.app/articles/${id}`,
  {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "string",
      content: "string",
      image: "string",
    }),
  }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error", error.result.status);
    // .catch(error => { console.error('error', error.result.status) });
  });

//axios
const patchArticle = async (id) => {
  try {
    axios({
      method: "PATCH",
      url: `https://sprint-mission-api.vercel.app/articles/${id}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.patch(
      `https://sprint-mission-api.vercel.app/articles/${id}`,
      {
        title: "string",
        content: "string",
        image: "string",
      }
    );
    console.log(response);
    return response.data;
    // return (await response).data;
  } catch (error) {
    console.log("error", error);
    // console.error('Error', error.response)
    // const statusCode = error.response.status
    // const statusText = error.response.statusText
    // const message = error.response.data.message[0];
    // console.log(`${statusCode} - ${statusText} - ${message}`)
  }
};

// ==============================================================================================================================

// //deleteArticle의 DELETE method 사용
export async function deleteArticle(id) {
  const url = new URL("https://sprint-mission-api.vercel.app/articles/");
  url.searchParams.append("id", id);
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}

async function deleteArticle(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/articles/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error", error);
    // console.log('error', error)
  }
}

//fetch
const deleteArticle = await fetch(
  `https://sprint-mission-api.vercel.app/articles/${id}`,
  {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  }
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error", error.result.status);
    // .catch(error => { console.error('error', error.result.status) });
  });

//axios
const deleteArticle = async (id) => {
  try {
    axios({
      method: "DELETE",
      url: `https://sprint-mission-api.vercel.app/articles/${id}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = await axios.delete(
      `https://sprint-mission-api.vercel.app/articles/${id}`
    );
    console.log(response);
    return response.data;
    // return (await response).data;
  } catch (error) {
    console.log("error", error);
    // console.error('Error', error.response)
    // const statusCode = error.response.status
    // const statusText = error.response.statusText
    // const message = error.response.data.message[0];
    // console.log(`${statusCode} - ${statusText} - ${message}`)
  }
};
