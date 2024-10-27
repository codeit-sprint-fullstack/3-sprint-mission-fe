
import axios from 'axios';

export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/products", {

        "page": page,
        "pageSize": pageSize,
        "keyword": keyword

    });
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}
  

export async function getProduct(articleId) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles");
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}



export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await axios.post("https://sprint-mission-api.vercel.app/products", {
    
        "name": name,
        "description": description,
        "price": price,
        "tags": tags,
        "images": images 

    });
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}





export async function PatchProduct(articlepatch) {
  try {
    const response = await axios.patch("https://sprint-mission-api.vercel.app/products");

    

    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}




export async function deleteProduct(articledelete) {
  try {
    const response = await axios.delete("https://sprint-mission-api.vercel.app/products");
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}



