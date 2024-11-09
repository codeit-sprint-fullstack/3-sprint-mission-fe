import React, { useState } from "react";
import "./index.css";

const ProdNameInputBox = ({ inputvalue, onChange }) => {
  const [nameValidation, setNameValidation] = useState(false);
  const [emptyNameInput, setEmptyNameInput] =
    useState("10자 이내로 입력해주세요");

  const handleNameInputBlur = (e) => {
    if (e.target.value.length >= 10) {
      setEmptyNameInput("10자 이내로 입력해주세요");
      setNameValidation(true);
    }
    if (e.target.value.length < 10 && e.target) setNameValidation(false);
    if (e.target.value.length === 0 && e.target) {
      setNameValidation(!nameValidation);
      setEmptyNameInput("상품명을 입력주세요");
    }
  };

  return (
    <div id="prodNmaeBox" className="mainWidth">
      <h1>상품명</h1>
      <input
        name="name"
        value={inputvalue}
        onChange={onChange}
        className="inputBox"
        type="text"
        placeholder="상품명을 입력해주세요"
        onBlur={handleNameInputBlur}
        id={nameValidation ? "redBorder" : ""}
      />
      <div
        style={nameValidation ? {} : { display: "none" }}
        className="productNameValidation"
      >
        {emptyNameInput}
      </div>
    </div>
  );
};

export default ProdNameInputBox;
