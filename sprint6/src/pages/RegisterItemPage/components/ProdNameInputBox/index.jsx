import React, { useState } from "react";
import "./index.css";

const ProdNameInputBox = ({ inputValue, onChange }) => {
const [nameValidation, setNameValidation] = useState(false);

  const handleNameInputBlur = (e) => {
    if (e.target.value.length >= 10) {
      setNameValidation(true);
    } else if (e.target.value.length < 10 && e.target) {
      setNameValidation(false);
    }
  }
    
  return (
    <div id="prodNmaeBox" className="mainWidth">
      <h1>상품명</h1>
      <input
        name="name"
        value={inputValue}
        onChange={onChange}
        className="inputBox"
        type="text"
        placeholder="상품명을 입력해주세요"
        onBlur={handleNameInputBlur}
        id={nameValidation ? "redBorder" : ""}
      />
      <span style={nameValidation ? {} : { display: "none" }} className="productNameValidation">10자 이내로 입력해주세요</span>
    </div>
  );
};

export default ProdNameInputBox;
