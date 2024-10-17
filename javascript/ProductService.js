import axios from "axios";

//DELETE method는 삭제하여 보낼 데이터가 없기때문에  headers, body 옵션이 필요가 없을까??......

//getProductList의 GET method
export async function getProductList(page, pageSize, keyword) {
  const url = new URL("https://sprint-mission-api.vercel.app/products?");
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

async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
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
const getProductList = await fetch(
  `https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
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
const getProductList = async (page, pageSize, keyword) => {
  try {
    axios({
      method: "GET",
      url: `https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.get(
      `https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    console.log(response);
    return response.data;
    // return (await response).data;
  } catch (error) {
    console.log("error", error);
    // console.error('Error', error.response) //참고한 블로그: https://velog.io/@luna_runa/Axios-async-await%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-Axios-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81
    // const statusCode = error.response.status
    // const statusText = error.response.statusText
    // const message = error.response.data.message[0];
    // console.log(`${statusCode} - ${statusText} - ${message}`)
  }
};

// ==============================================================================================================================

//getProduct의 GET method
export async function getProduct(id) {
  const url = new URL("https://sprint-mission-api.vercel.app/products/");
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

async function getProduct(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products/${id}`
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
const getProduct = await fetch(
  `https://sprint-mission-api.vercel.app/products/${id}`
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
const getProduct = async (id) => {
  try {
    axios({
      method: "GET",
      url: `https://sprint-mission-api.vercel.app/products/${id}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.get(
      `https://sprint-mission-api.vercel.app/products/${id}`
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

// createProduct의POST method
export async function createProduct() {
  const url = new URL("https://sprint-mission-api.vercel.app/products/");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "string",
        description: "string",
        price: 0,
        manufacturer: "string",
        tags: ["string"],
        images: ["string"],
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

// createProduct의POST method의 body데이터
// export const productsBodyData = {
//   "name": "string",
//   "description": "string",
//   "price": 0,
//   "manufacturer": "string",
//   "tags": [ "string" ],
//   "images": [ "string" ]
// };

async function createProduct() {
  try {
    const response = await fetch(
      "https://sprint-mission-api.vercel.app/products/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "string",
          description: "string",
          price: 0,
          manufacturer: "string",
          tags: ["string"],
          images: ["string"],
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
const createProduct = await fetch(
  "https://sprint-mission-api.vercel.app/products/",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "string",
      description: "string",
      price: 0,
      manufacturer: "string",
      tags: ["string"],
      images: ["string"],
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
const createProduct = async () => {
  try {
    axios({
      method: "POST",
      url: "https://sprint-mission-api.vercel.app/products/",
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.post(
      "https://sprint-mission-api.vercel.app/products/",
      {
        name: "string",
        description: "string",
        price: 0,
        manufacturer: "string",
        tags: ["string"],
        images: ["string"],
      } //JSON.stringify(productsBodyData)
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

//patchProduct의 PATCH method
export async function patchProduct(id) {
  const url = new URL("https://sprint-mission-api.vercel.app/products/");
  url.searchParams.append("id", id);
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "string",
        description: "string",
        price: 0,
        tags: ["string"],
        images: ["string"],
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

//patchProduct의 PATCH method의 body데이터
// export const productsBodyData1 = {
//   name: "string",
//   description: "string",
//   price: 0,
//   tags: ["string"],
//   images: ["string"],
// };

async function patchProduct(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "string",
          description: "string",
          price: 0,
          tags: ["string"],
          images: ["string"],
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
const patchProduct = await fetch(
  `https://sprint-mission-api.vercel.app/products/${id}`,
  {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "string",
      description: "string",
      price: 0,
      tags: ["string"],
      images: ["string"],
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
const patchProduct = async (id) => {
  try {
    axios({
      method: "PATCH",
      url: `https://sprint-mission-api.vercel.app/products/${id}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = axios.patch(
      `https://sprint-mission-api.vercel.app/products/${id}`,
      {
        name: "string",
        description: "string",
        price: 0,
        tags: ["string"],
        images: ["string"],
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

//deleteProduct의 DELETE method
export async function deleteProduct(id) {
  const url = new URL("https://sprint-mission-api.vercel.app/products/");
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

async function deleteProduct(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products/${id}`,
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
const deleteProduct = await fetch(
  `https://sprint-mission-api.vercel.app/products/${id}`,
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
const deleteProduct = async (id) => {
  try {
    axios({
      method: "DELETE",
      url: `https://sprint-mission-api.vercel.app/products/${id}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    }); //axios(config)
    const response = await axios.delete(
      `https://sprint-mission-api.vercel.app/products/${id}`
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
