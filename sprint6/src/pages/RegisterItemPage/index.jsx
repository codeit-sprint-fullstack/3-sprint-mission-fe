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

  return (
    <>
      <Header />
      <div id="addItemPageMainContent">
        <div id="addItemBox">
          <div id="registerBox" className="mainWidth">
            <h1>상품 등록하기</h1>
            <button>등록</button>
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
