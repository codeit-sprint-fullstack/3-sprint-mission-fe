//Article 

const articlesApi = "https://sprint-mission-api.vercel.app/articles";

//게시글 목록 조회
export async function getArticleList(page, pageSize, keyword) {
  const url = new URL(articlesApi);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("keyword", keyword);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('실패');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}


//게시글 등록
export async function createArticle(title, content, image) {
  const bodyData = { title, content, image };

  try {
    const response = await fetch(articlesApi, {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('실패');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// //게시글 상세조회
async function getArticle(id) {
  try {
    const response = await fetch(`${articlesApi}/${id}`);
    if (!response.ok) throw new Error('실패');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// //게시글 수정
async function patchArticle(id, title, content, image) {
  const bodyData = { title, content, image }
  try {
    const response = await fetch(`${articlesApi}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(bodyData),
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('실패');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// //게시글 삭제
async function deleteArticle(id) {
  try {
    const response = await fetch(`${articlesApi}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('실패');
  } catch (err) {
    console.error(error);
  }
}

// const good = await createArticle("개굴님", "개굴개굴", "태훈.png");
const good = await getArticleList(1, 10, "개굴");
console.log(good)









// // function good(){
//   export function test(){
//   return
//   <div>
//     <h1>{content}</h1>
//   </div>
// }

// import {JangImg} from "./components/JangImg"
// <div>
//   <jangimg
//   content = "당근당근"
//   />
// </div>

// export function test({ childern }) {
//   return
//   <div>
//     {childern}

//   </div>
// }

// function App() { 
// const [count, setCount] = useSate(0);

// const handleClick = () => {
//   setText(count + 1)

// };
// }
// return
// <h2>{count}</h2>
