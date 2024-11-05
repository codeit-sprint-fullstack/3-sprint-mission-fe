import { useState } from "react";
import "./index.css";
import "../../styles/global.css";
// jsx
import Header from "./components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import ProdNameInputBox from "./components/ProdNameInputBox/index.jsx";
import ProdDescriptionInputBox from "./components/ProdDescriptionInputBox/index.jsx";
import ProdPriceInputBox from "./components/ProdPriceInputBox/index.jsx";
import ProdTagsInputBox from "./components/ProdTagsInputBox/index.jsx";
// api
import postProduct from "../../api/postProductApi.js";
// img
// import defaultImg from "../../img/default/FE_default_Img.png";

function RegisterItemPage() {
  const [nameInputValue, setNameInputValue] = useState();
  const [descriptionInputValue, setDescriptionInputValue] = useState();
  const [priceInputValue, setPriceInputValue] = useState();
  const [tagsInputValue, setTagsInputValue] = useState();

  const handleProductNameOnChange = (e) => setNameInputValue(e.target.value);
  const handleProductDescriptionValue = (e) => setDescriptionInputValue(e.target.value);
  const handleProductPriceValue = (e) => setPriceInputValue(e.target.value);
  const handleProductTagsValue = (e) => setTagsInputValue(e.target.value);

  /*
  api를 쏴서, 현재 있는 input들을 백엔드쪽으로 보내는 것.
  */
  const handleProductSubmit = async () => {

    console.log('등록 버튼 작동 중')
    const surveyDataPost = {
      "name": nameInputValue, // String
      "description": descriptionInputValue, // String
      "price": Number(priceInputValue), // Number
      "tags": tagsInputValue, // String
      "isComplete": true
    }
    
    console.log('surveyDataPost 값 나오는 중', surveyDataPost)
    try {
      console.log('Post 요청 시작')
      const postSurveyData = await postProduct(surveyDataPost)
      console.log(postSurveyData)
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      } else {
        console.log('리퀘스트가 실패했습니다.');
      }
    }
  }

  return (
    <>
      <Header />
      <div id="addItemPageMainContent">
        <div id="addItemBox">
          <div id="registerBox" className="mainWidth">
            <h1>상품 등록하기</h1>
            <button onClick={handleProductSubmit}>등록</button>
          </div>

          <ProdNameInputBox
            inputValue={nameInputValue}
            onChange={handleProductNameOnChange}
          />

          <ProdDescriptionInputBox
            inputValue={descriptionInputValue}
            onChange={handleProductDescriptionValue}
          />

          <ProdPriceInputBox
            inputValue={priceInputValue}
            onChange={handleProductPriceValue}
          />

          <ProdTagsInputBox
            inputValue={tagsInputValue}
            onChange={handleProductTagsValue}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterItemPage;
