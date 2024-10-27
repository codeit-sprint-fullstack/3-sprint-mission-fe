import heartImg from '../img/icons/heart.png';
import './ProductsInfo.css';

function ProdsList({price, images, name, favoriteCount}) {
  
  return (
    <div id='products'>
      <img id='productsImg' src={images} />
      <div className='prodName'>{name}</div>
      <div className='prodPrice'>{price}원</div>
      <img src={heartImg} className='heart' />
      <span className='heartNum'>{favoriteCount}</span>
    </div>
  )
}

export default ProdsList;