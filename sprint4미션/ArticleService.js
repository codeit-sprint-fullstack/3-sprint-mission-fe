export async function getArticleList(page, pageSize, keyword) {
    return fetch(`https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`).then((data) => {
        if (!data.ok) {
            return data.text().then((message) => {
                return message;
            });
        }
        return data.json();
    }).catch((err) => {
        throw new err;
    });
}

export async function getArticle(id) {
    return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`).then((data) => {
        if (!data.ok) {
            return data.text().then((message) => {
                return message;
            });
        }
        return data.json();
    }).catch((err) => {
        throw new err;
    });
}

export async function createArticle(params) {
    return fetch(`https://sprint-mission-api.vercel.app/articles/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    }).then((data) => {
        if (!data.ok) {
            return data.text().then((message) => {
                return message;
            });
        }
        return data.json();
    }).catch((err) => {
        throw new err;
    });
}

export async function patchArticle(id, params) {
    return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    }).then((data) => {
        if (!data.ok) {
            return data.text().then((message) => {
                return message;
            });
        }
        return data.json();
    }).catch((err) => {
        throw new err;
    });
}

export async function deleteArticle(id) {
    const deleteText = `${id} 번 기사가 삭제되었습니다.`;
    return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
        method: "DELETE",
    }).then((data) => {
        if (!data.ok) {
            return data.text().then((message) => {
                return message;
            });
        }
        return deleteText;
    }).catch((err) => {
        throw new err;
    });
}