const ProdNameInputBox = ({ inputValue, onChange }) => {
  return (
    <div id="prodNmaeBox" className="mainWidth">
      <h1>상품명</h1>
      <input
        value={inputValue}
        onChange={onChange}
        className="inputBox"
        type="text"
        placeholder="상품명을 입력해주세요"
      />
    </div>
  );
};

export default ProdNameInputBox;
