import getProductsList from '../../api/getProductsList.jsx';
import { useEffect, useState } from 'react';

function BestItem() {
    const [products, setProducts] = useState([]);

    const updateProducts = async () => {
        const axiosProducts = await getProductsList();
        setProducts(axiosProducts.products);
    }
    useEffect(() => {
        updateProducts();
    }, []);

    return (
        <div className='best-item'>
            <div className='best-item-text'>
                베스트 상품
            </div>
            <div className='item-container'>
                {products.length === 0 ? (<p className='none-product'>상품이 없습니다.</p>) :
                    (products.map((product, index) => (
                        <div key={index} className='ItemComponent'>
                            <div className='contain-img'>
                                <img src={product.images} alt={product.name} />
                            </div>
                            <div className='contain-text'>
                                <div className='contain-text-product-des'>{product.name}</div>
                                <div className='contain-text-price'>{product.price}원</div>
                                <div className='contain-text-like'>
                                    <a className='like-button'>
                                        <span className="material-symbols-outlined favorite-icon">
                                            favorite
                                        </span>
                                    </a>
                                    <div className='contain-text-like-fs'>
                                        {product.favoriteCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    )};
            </div>
        </div>
    );
}

export default BestItem;