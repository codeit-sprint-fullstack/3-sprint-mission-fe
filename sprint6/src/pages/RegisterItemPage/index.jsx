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
import { Link } from "react-router-dom";
// img
// import defaultImg from "../../img/default/FE_default_Img.png";

function RegisterItemPage() {

  const [values, setValues] = useState({
    naem: "",
    description: "",
    price: 0,
    tags: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleProductSubmit = async () => {
    console.log("등록 버튼 작동 중");
    
    const surveyDataPost = {
      name: values.name, // String
      description: values.description, // String
      price: values.price, // Number
      tags: values.tags, // String
      isComplete: true,
    };

    console.log("surveyDataPost 값 나오는 중", surveyDataPost);
    try {
      console.log("Post 요청 시작");
      const postSurveyData = await postProduct(surveyDataPost);
      console.log(postSurveyData);
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data);
      } else {
        console.log("리퀘스트가 실패했습니다.");
      }
    }
  };

  return (
    <>
      <Header />
      <div id="addItemPageMainContent">
        <form id="addItemBox">
          <div id="registerBox" className="mainWidth">
            <h1>상품 등록하기</h1>
            <button onClick={handleProductSubmit}><Link to="/itemDetail">등록</Link></button>
          </div>

          <ProdNameInputBox
            inputValue={values.name}
            onChange={handleInputChange}
          />

          <ProdDescriptionInputBox
            inputValue={values.description}
            onChange={handleInputChange}
          />

          <ProdPriceInputBox
            inputValue={values.price}
            onChange={handleInputChange}
          />

          <ProdTagsInputBox
            inputValue={values.tags}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterItemPage;
