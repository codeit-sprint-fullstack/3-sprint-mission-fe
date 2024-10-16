export const getProductList = async (page=1 , pageSize= 100, keyword= '') => {
    try {
    const url = new URL (`https://sprint-mission-api.vercel.app/products/${page}&${pageSize}&${keyword}`);
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }catch(error) {
        console.log(`오류가 발생했습니다.`)
    }
}

export const getProduct = async (id) => {
    try{
        const url = new URL (`https://sprint-mission-api.vercel.app/products/${id}`);
        Object.keys(id).forEach((key)=>{
            url.searchParams.append(key, id[key]);
        });
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(`오류가 발생했습니다.`);
        throw error;
    }
}

export const createProduct = async (name, description, price, tags,images) => {
    const requestBody={
        "name": name,
        "description": description,
        "price": price,
        "tags":[
            tags
        ],
        "images": [
            images
        ]
    };
    try {
        const url = new URL  ("https://sprint-mission-api.vercel.app/products");
        const response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(requestBody),
            headers:{
                "content-Type": "application/json",
            },
        });
        return response;
    }catch(error){
        console.log(`오류가 발생했습니다.`);
    }
}

export const patchProduct = async (id, name, description, price, tags, images) => {
    const requestBody = {
        "name": name,
        "description": description,
        "price": price,
        "tags": [
            tags
        ],
        "images": [
            images
         ],
    };
    try {
        const url = new URL (`https://sprint-mission-api.vercel.app/products/${id}`);
        const response = await fetch(url,{
            method: "PATCH",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }catch(error){
        console.log(`오류가 발생했습니다.`);
    }
}

export const deleteProduct = async (id) => {
    try{
        const url = new URL(`https://sprint-mission-api.vercel.app/products/${id}`);
        const response = await fetch(url,{
            method: "DELETE",
        });
        return response;
    }catch(error){
        console.log(`오류가 발생했습니다. `)
    }
}
