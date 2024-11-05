import React, { useState } from "react";
import "./index.css";
import Ximg from "../../../../img/icons/ic_X.png";

const ProdTagsInputBox = ({ inputValue, onChange }) => {

  const [tagsValidation, setTagsValidation] = useState(false);
  const [emptyTagsInput, setEmptyTagsInput] =
    useState("5글자 이내로 입력해주세요");
  const [tagsValue, setTagsValue] = useState();

  console.log("tagsValue", tagsValue);

  const handleTagsInputBlur = (e) => {
    
    if (e.target.value.length === 0) {
      setEmptyTagsInput("5글자 이내로 입력해주세요");
      setTagsValidation(!tagsValidation);
    }

    if (e.target.value.length >= 5) {
      setEmptyTagsInput("5글자 이내로 입력해주세요");
    }

    if (e.target.value.length < 5) {
      setTagsValue(e.target.value);
    }
  };

  const handleTagsInputKeyDown = (e) => {
    if (e.target.value.length < 5 && e.key === 'enter') {
      setTagsValue(e.target.value);
      setTagsValue("")
    }
  }

  return (
    <div id="prodTagsBox" className="mainWidth">
      <h1>태그</h1>
      <input
        name="tags"
        className="inputBox"
        placeholder="태그를 입력해주세요"
        type="text"
        inputValue={inputValue}
        onChange={onChange}
        onBlur={handleTagsInputBlur}
        onKeyDown={handleTagsInputKeyDown}
        // value={tagsValue}
        id={tagsValidation ? "redBorder" : ""}
      />
      <div
        style={tagsValidation ? {} : { display: "none" }}
        className="productTagsValidation"
      >
        {emptyTagsInput}
      </div>
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
  );
};

export default ProdTagsInputBox;
