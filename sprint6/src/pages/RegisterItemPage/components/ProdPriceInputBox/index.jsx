import React, { useState } from "react";
import "./index.css";

const ProdPriceInputBox = ({ inputValue, onChange }) => {

  const [priceValidation, setPriceValidation] = useState(false);
  const [emptyPriceInput, setEmptyPriceInput] =
    useState("숫자로 입력해주세요");

  const handlePriceInputBlur = (e) => {
    console.log(e.target.value)
    
    if (isNaN(e.target.value)) {
      setEmptyPriceInput("숫자로 입력해주세요");
      setPriceValidation(!priceValidation);
    }

    if (e.target.value.valueAsNumber < 10 && e.target) setPriceValidation(false);

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
        inputValue={inputValue}
        onChange={onChange}
        className="inputBox"
        placeholder="판매 가격을 입력해주세요"
        type="text"
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
