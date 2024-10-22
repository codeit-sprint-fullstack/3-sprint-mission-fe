import heartImg from '../img/icons/heart.png'
import './ProductsInfo.css';

function BestProdsList() {

  return (
    <div id='bestProducts'>
      <img src id='bestProsImg'/>
      <div className='prodName'>상품명</div>
      <div className='prodPrice'>가격</div>
      <img src={heartImg} className='heart' />
      <span className='heartNum'>점수</span>
    </div>
  )
}

export default BestProdsList;