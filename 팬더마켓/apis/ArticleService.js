
export const getArticleList = async (page=1, pageSize=100, keyword ='') => {
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${page}&${pageSize}&${keyword}`);
    return fetch(url)
        .then((response)=>response.json())
        .then((data)=>data)
        .catch(()=>console.log(`오류가 발생했습니다.`));
}


export const getArticle = async (id) => {
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${id}`);
    Object.keys(id).forEach((key)=>{
        url.searchParams.append(key, id[key]);
    });
    return fetch(url)
        .then((response)=> response.json())
        .then((data)=>console.log(data))
        .catch(()=>console.log('Error!'));
}

export const createArticle = async (title, content, image) => {
    const body = {
        "title": title,
        "content": content,
        "image": image,
    };
    const url = new URL("https://sprint-mission-api.vercel.app/articles");
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((response)=> response.json())
    .then((data)=>console.log(data))
    .catch(()=>console.log('Error!'));
}

export const patchArticle = async (id, title, content, image) => {
    const requestBody = {
        "title": title,
        "content": content,
        "image": image,
    };
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${id}`);
    return fetch(url, {
        method: "PATCH",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response)=> response.json())
    .then((data)=>data)
    .catch(()=>console.log('Error!'));
}

export const deleteArticle = async (id) => {
    const url = new URL(`https://sprint-mission-api.vercel.app/articles/${id}`);
    return fetch(url, {
        method : "DELETE",
    })
    .then((response)=> response.json())
    .then((data)=>data)
    .catch(()=>console.log('Error!'));
}