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
  const [registerButtonDone, setRegisterButtonDone] = useState(false);
  const [values, setValues] = useState({
    name: "",
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
    console.log("values", values);
    console.log("name", values.name.length);
    console.log("description", values.description.length);
    console.log("price", values.price);
    console.log("tags length", values.tags.length);

    if (
      values.name.length <= 5 &&
      values.description.length >= 10 &&
      values.price >= 1 &&
      values.tags.length !== 0 && values.tags.length <= 5
    ) {
      setRegisterButtonDone(true);
    } else { setRegisterButtonDone(false) };
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();

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

  const registerButton = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <div id="addItemPageMainContent">
        <form id="addItemBox">
          <div id="registerBox" className="mainWidth">
            <h1>상품 등록하기</h1>
            {registerButtonDone ? (
              <button
                onClick={handleProductSubmit}
                className={registerButtonDone ? "done" : ""}
              >
                <Link to="/itemDetail">등록</Link>
              </button>
            ) : (
              <button onClick={registerButton}>등록</button>
            )}
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
