export function getArticle(articleId) {
  return fetch(`${API_HOST}/articles/${articleId}`)
    .then((fetchResult) => normalizeFetchResult(fetchResult))
    .then((normalizedFetchResult) => handleNormalizedFetchResult(normalizedFetchResult))
    .catch((error) => handleError(error));
}

//굳이 then을 쓴다면 위와같이 바꿔서 쓰고
//then은 비동기 함수 값을 얻어오기때문에
//나중에 결과값을 얻어올때 
//Const good = await  getArticle(“파라미터들")
//이렇게도 이용이 가능하다.