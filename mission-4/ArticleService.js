// 게시글 관련 fetch API

export async function getArticleList(
  page = 1,
  pageSize = 10,
  keyword = "",
  order = "id"
) {
  console.log("게시글 목록 조회");
  const url = new URL("https://sprint-mission-api.vercel.app/articles");
  // Object.keys(params).forEach((key) =>
  //   url.searchParams.append(key, params[key])
  // );
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("keyword", keyword);
  url.searchParams.append("order", order);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("데이터를 가져오지 못했습니다 :", e);
    return null;
  }
}

export async function getArticle(id) {
  console.log("게시글 상세 조회");

  try {
    const res = await fetch(
      `https://sprint-mission-api.vercel.app/articles/${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(`${id}의 데이터를 가져오지 못했습니다 :`, e);
  }
}

export async function createArticle(articleData) {
  console.log("게시글 등록");
  const res = await fetch("https://sprint-mission-api.vercel.app/articles", {
    method: "POST",
    body: JSON.stringify(articleData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  /*
  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
*/
  if (!res.ok) {
    const body = await res.json();
    const { message } = body;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}

export async function patchArticle(id, articleData) {
  console.log("게시글 수정");
  const res = await fetch(
    `https://sprint-mission-api.vercel.app/articles/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    const body = await res.json();
    const { message } = body;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}

export async function deleteArticle(id) {
  console.log("게시글 삭제");
  const res = await fetch(
    `https://sprint-mission-api.vercel.app/articles/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    const body = await res.json();
    const { message } = body;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}
