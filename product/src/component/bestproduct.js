import './bestproduct.css';
import heart from '../image/ic_heart.png';

function BestProduct({products}){
    return (
        <div className='bestproduct'>  
            {products.map((product, index)=>{
                return (
                    <ul className='p'  key={index}>
                        <img src = {product.images} alt={product.name} width="250" />
                        <li className='name' >{product.name}</li>
                        <li className='price' >{product.price}원</li>
                        <div className='favorite' >
                            <img src={heart} alt='하트이미지'/>
                            <li className='count'>{product.favoriteCount}</li>
                        </div>
                    </ul>
                );
            })}
        </div>
    );
 }

 export default BestProduct;