export const getArticleList = async (page, pageSize, keyword) => {
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${page}&${pageSize}&${keyword}`);
    const response = fetch(url);
    const data = (await response).json();
    return data;
}


export const getArticle = async (id) => {
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${id}`);
    Object.keys(id).forEach((key)=>{
        url.searchParams.append(key, id[key]);
    });
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const createArticle = async (title, content, image) => {
    const body = {
        "title": title,
        "content": content,
        "image": image,
    };
    const url = new URL("https://sprint-mission-api.vercel.app/articles");
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json",
        },
    });
    return response;
}

export const patchArticle = async (id, title, content, image) => {
    const requestBody = {
        "title": title,
        "content": content,
        "image": image,
    };
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${id}`);
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export const deleteArticle = async (id) => {
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${id}`);
    const response = await fetch(url, {
        method : "DELETE",
    });
    return response;
}