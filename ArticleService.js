function getArticleList(page, pageSize, keyword) {
    fetch(`https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`오류 발생: 상태 코드 ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('에러:', error);
        });
}

function getArticle(articleId) {
    fetch(`https://sprint-mission-api.vercel.app/articles/${articleId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`오류 발생: 상태 코드 ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('에러:', error);
        });
}

function createArticle(articlePost) {
    fetch('https://sprint-mission-api.vercel.app/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articlePost)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`오류 발생: 상태 코드 ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('에러:', error);
        });
}

function patchArticle(articleId, updateData) {
    fetch(`https://sprint-mission-api.vercel.app/articles/${articleId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`오류 발생: 상태 코드 ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('에러:', error);
        });
}


