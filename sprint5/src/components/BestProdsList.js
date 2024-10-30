import heartImg from '../img/icons/heart.png'
import './ProductsInfo.css';

function BestProdsList({ images, name, price, favoriteCount }) {
  return (
    <div className='bestProducts'>
      <img className='bestProsImg' src={images} />
      <div className='prodName'>{name}</div>
      <div className='prodPrice'>{price}원</div>
      <img src={heartImg} className='heart' />
      <span className='heartNum'>{favoriteCount}</span>
    </div>
  )
}

export default BestProdsList;