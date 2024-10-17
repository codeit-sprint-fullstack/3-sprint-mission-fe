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
// // 게시글 리스트 실행
// getArticleList()
//   .then((getDataList) => console.log("게시글 리스트:", getDataList)) // 성공 시 데이터 처리
//   .catch((error) => console.error("에러:", error)); // 실패 시 에러 처리

//  searchParams 함수 써보기 왜 안되지? 해결 ->블로그 확인
// const url = new URL("https://sprint-mission-api.vercel.app/articles");
// url.searchParams.append("id", id);
// const response = await fetch(url.toString(), {
//     method: "GET",
//     heades: {
//         "Content-type": "application/json"
//     }
// });

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
// // 게시글 가져오기 실행
// getArticle(122)
//   .then((getDataList) => console.log("게시글 리스트:", getDataList)) // 성공 시 데이터 처리
//   .catch((error) => console.error("에러:", error)); // 실패 시 에러 처리

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
// // 게시글 생성하기 실행

// // createArticle(bodyObj) 에 넣을 객체 생성 함수
// export function createArticleBody(title, content, image) {
//   return { title, content, image };
// }
// const newArticle = createArticleBody("제목 예시", "내용", "이미지 주소");
// createArticle(newArticle)
//   .then(() => console.log("게시글 생성 완료"))
//   .catch((error) => console.error("에러 발생:", error));

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
// // 게시글 수정하기 실행

// // patchArticle함수의 body에 넣을 객체 생성 일부만 넣어도 만들어지게
// function patchArticleBody(title, content, image) {
//   const patchBody = {};
//   if (title) patchBody.title = title;
//   if (content) patchBody.content = content;
//   if (image) patchBody.image = image;

//   return patchBody;
// }
// const patchBody = patchArticleBody(null, "내용", "이미지 주소");

// patchArticle(937, patchBody)
//   .then(() => console.log("게시글 수정 완료"))
//   .catch((error) => console.error("에러 발생:", error));

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
// // 게시글 삭제 실행
// deleteArticle(120)
//   .then((data) => {
//     console.log("삭제 성공");
//   })
//   .catch((error) => console.error("에러:", error));
