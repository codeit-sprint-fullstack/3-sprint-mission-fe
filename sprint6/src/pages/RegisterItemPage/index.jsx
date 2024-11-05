import { useState }  from "react"
import "./index.css";
import "../../styles/global.css";
// jsx
import Header from "./components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import ProdNameInputBox from "./components/ProdNameInputBox/index.jsx";
import ProdDescriptionInputBox from "./components/ProdDescriptionInputBox/index.jsx";
// img
import Ximg from "../../img/icons/ic_X.png";

function RegisterItemPage() {
  const [nameInputValue, setNameInputValue] = useState();
  const [descriptionInputValue, setDescriptionInputValue] = useState();
  
  const handleProductNameOnChange = (e) => setNameInputValue(e.target.value)
  const handleProductDescriptionValue = (e) => setDescriptionInputValue(e.target.value)

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

          <div id="prodPriceBox" className="mainWidth">
            <h1>판매가격</h1>
            <input className='inputBox' placeholder="판매 가격을 입력해주세요" />
          </div>

          <div id="prodTagsBox" className="mainWidth">
            <h1>태그</h1>
            <input className='inputBox' type="text" placeholder="태그를 입력해주세요" />
            <div id="tagBox">
              <div className="tag" style={{ marginLeft: "0" }}>
                <span>#태그</span>
                <img src={Ximg} alt="Ximg" />
              </div>
              <div className="tag">
                <span>#태그</span>
                <img src={Ximg} alt="Ximg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterItemPage;
