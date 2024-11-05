import Ximg from "../../../../img/icons/ic_X.png";

const ProdTagsInputBox = ({ inputValue, onChange }) => {
  return (
    <div id="prodTagsBox" className="mainWidth">
      <h1>태그</h1>
      <input
        name="tags"
        inputValue={inputValue}
        onChange={onChange}
        className="inputBox"
        type="text"
        placeholder="태그를 입력해주세요"
      />
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
