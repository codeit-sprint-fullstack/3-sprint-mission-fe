import './product.css';
import heart from '../image/ic_heart.png';
import Image from '../image/img_default.png';

 
 function ProductList({products}){
    return (
        <div className='product'>  
            {products.map((product, index)=>{
                return (
                    <ul className='p' key={index}>
                        <img src = {Image} alt={product.name} width="250" />
                        <li className='name'>{product.name}</li>
                        <li className='price'>{product.price}원</li>
                        <div className='favorite'>
                            <img src={heart} alt='하트이미지'/>
                            <li className='count'>{product.favoriteCount}</li>
                        </div>
                    </ul>
                );
            })}
        </div>
    );
 }

 export default ProductList;
