import React, { useState } from "react";
import "./index.css";

const ProdPriceInputBox = ({ inputvalue, onChange }) => {
  const [priceValidation, setPriceValidation] = useState(false);
  const [emptyPriceInput, setEmptyPriceInput] = useState("숫자로 입력해주세요");

  const handlePriceInputBlur = (e) => {
    if (isNaN(e.target.value)) {
      setPriceValidation(true);
      setEmptyPriceInput("숫자로 입력해주세요");
    } else {
      setPriceValidation(false);
      setEmptyPriceInput("숫자로 입력해주세요");
    }

    if (e.target.value.length === 0) {
      setPriceValidation(!priceValidation);
      setEmptyPriceInput("판매 가격을 입력해주세요");
    }
  };

  return (
    <div id="prodPriceBox" className="mainWidth">
      <h1>판매가격</h1>
      <input
        name="price"
        inputvalue={inputvalue}
        onChange={onChange}
        className="inputBox"
        placeholder="판매 가격을 입력해주세요"
        type="number"
        onBlur={handlePriceInputBlur}
        id={priceValidation ? "redBorder" : ""}
      />
      <div
        style={priceValidation ? {} : { display: "none" }}
        className="productPriceValidation"
      >
        {emptyPriceInput}
      </div>
    </div>
  );
};

export default ProdPriceInputBox;
