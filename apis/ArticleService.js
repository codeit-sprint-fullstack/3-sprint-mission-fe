// 게시글 리스트 가져오기
export function getArticleList(page = 1, pageSize = 100, keyword = "") {
  return fetch(
    `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 리스트 불러오기 실패: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 리스트 불러오기 성공");
      return data;
    })
    .catch((err) => {
      console.log(`먼가 오류 발생!!! => ${err}`);
      return `오류 : ${err}`;
    });
}

// 하나의 게시글 가져오기
const articleURL = new URL("https://sprint-mission-api.vercel.app/articles");
export function getArticle(id) {
  const getIdURL = `${articleURL}/${id}`;
  return fetch(getIdURL.toString(), {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 리스트 불러오기 실패: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시글 리스트 불러오기 성공");
      return data;
    })
    .catch((err) => {
      return `먼가 오류 발생!!! => ${err}`;
    });
}

//게시글 만들기
export function createArticle(bodyObj) {
  return fetch("https://sprint-mission-api.vercel.app/articles", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  })
    .then((response) => {
      if (!response) {
        throw new Error("게시글 생성하기 실패" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(
        `게시글 생성하기 성공 - 생성한 게시글 내용 = ${JSON.stringify(
          data,
          null,
          2
        )}`
      );
    })
    .catch((err) => {
      return `먼가 오류 발생!!1 => ${err}`;
    });
}

//게시글 수정하기
export function patchArticle(id, patchBodyObj) {
  return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(patchBodyObj),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`id=${id} 게시글 수정하기 실패` + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(
        `id=${id} 게시글 수정하기 성공 - 수정된 게시글 내용 = ${JSON.stringify(
          data,
          null,
          2
        )}`
      );
    })
    .catch((err) => {
      return `먼가 오류 발생!!! => ${err}`;
    });
}

//게시글 지우기
export function deleteArticle(id) {
  return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`id=${id} 게시글 삭제하기 실패` + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`id=${id} 게시글 삭제하기 성공`);
    })
    .catch((err) => {
      return `먼가 오류 발생!!! => ${err}`;
    });
}
