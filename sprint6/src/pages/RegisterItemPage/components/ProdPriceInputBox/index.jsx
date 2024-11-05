const ProdPriceInputBox = ({ inputValue, onChange }) => {
  return (
    <div id="prodPriceBox" className="mainWidth">
    <h1>판매가격</h1>
      <input
        inputValue={inputValue}
        onChange={onChange}
        className='inputBox' placeholder="판매 가격을 입력해주세요" type="number" />
  </div>
  )
}

export default ProdPriceInputBox;