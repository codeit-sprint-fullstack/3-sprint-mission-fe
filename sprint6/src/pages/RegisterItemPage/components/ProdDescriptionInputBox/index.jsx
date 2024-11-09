import React, { useState } from "react";
import "./index.css";

const ProdDescriptionInputBox = ({ inputvalue, onChange }) => {
  const [descriptionValidation, setDescriptionValidation] = useState(false);
  const [emptyDescriptionInput, setEmptyDescriptionInput] =
    useState("10자 이상 입력해주세요");

  const handleDescriptionInputBlur = (e) => {
    if (e.target.value.length < 10) {
      setEmptyDescriptionInput("10자 이상 입력해주세요");
      setDescriptionValidation(true);
    }
    if (e.target.value.length >= 10 && e.target)
      setDescriptionValidation(false);
    if (e.target.value.length === 0 && e.target) {
      setEmptyDescriptionInput("상품 소개를 입력해주세요");
      setDescriptionValidation(!descriptionValidation);
    }
  };

  return (
    <div id="prodIntroBox" className="mainWidth">
      <h1>상품 소개</h1>
      <input
        name="description"
        inputvalue={inputvalue}
        onChange={onChange}
        className="inputBox"
        type="text"
        onBlur={handleDescriptionInputBlur}
        placeholder="상품 소개를 입력해주세요"
        id={descriptionValidation ? "redBorder" : ""}
      />
      <span
        style={descriptionValidation ? {} : { display: "none" }}
        className="productDescriptionValidation"
      >
        {emptyDescriptionInput}
      </span>
    </div>
  );
};

export default ProdDescriptionInputBox;
