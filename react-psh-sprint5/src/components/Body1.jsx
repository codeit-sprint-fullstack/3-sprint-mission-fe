import '../css/body.css';

import { useEffect, useState } from 'react';


function Body1() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=favorite')
            .then((response) => response.json())
            .then((data) => {
                const sortedProducts = data.list.sort((a, b) => b.favoriteCount - a.favoriteCount).slice(0, 4);
                setProducts(sortedProducts);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='best-item'>
            <div className='best-item-text'>베스트 상품</div>
            <div className='item-container'>

                <div className='ItemCompo1'>
                    {products[0] && (
                        <div className="ItemComponent">
                            <div className='contain-img'>
                                <img src={products[1].images} alt={products[0].name[0]} />
                            </div>
                            <div className='contain-text'>
                                <div className='contain-text-product-des'>{products[0].description}</div>
                                <div className='contain-text-price'>{products[0].price}원</div>
                                <div className='contain-text-like'>
                                    <a className='like-button'>
                                        <span className="material-symbols-outlined favorite-icon">
                                            favorite
                                        </span>
                                    </a>
                                    <div className='contain-text-like-fs'>
                                        {products[0].favoriteCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='ItemCompo2'>
                    {products[1] && (
                        <div className="ItemComponent">
                            <div className='contain-img'>
                                <img src={products[1].images} alt={products[1].name} />
                            </div>
                            <div className='contain-text'>
                                <div className='contain-text-product-des'>{products[1].description}</div>
                                <div className='contain-text-price'>{products[1].price}원</div>
                                <div className='contain-text-like'>
                                    <a className='like-button'>
                                        <span className="material-symbols-outlined favorite-icon">
                                            favorite
                                        </span>
                                    </a>
                                    <div className='contain-text-like-fs'>
                                        {products[1].favoriteCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='ItemCompo3'>
                    {products[2] && (
                        <div className="ItemComponent">
                            <div className='contain-img'>
                                <img src={products[2].images} alt={products[2].name} />
                            </div>
                            <div className='contain-text'>
                                <div className='contain-text-product-des'>{products[2].description}</div>
                                <div className='contain-text-price'>{products[2].price}원</div>
                                <div className='contain-text-like'>
                                    <a className='like-button'>
                                        <span className="material-symbols-outlined favorite-icon">
                                            favorite
                                        </span>
                                    </a>
                                    <div className='contain-text-like-fs'>
                                        {products[2].favoriteCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='ItemCompo4'>
                    {products[3] && (
                        <div className="ItemComponent">
                            <div className='contain-img'>
                                <img src={products[3].images} alt={products[3].name} />
                            </div>
                            <div className='contain-text'>
                                <div className='contain-text-product-des'>{products[3].description}</div>
                                <div className='contain-text-price'>{products[3].price}원</div>
                                <div className='contain-text-like'>
                                    <a className='like-button'>
                                        <span className="material-symbols-outlined favorite-icon">
                                            favorite
                                        </span>
                                    </a>
                                    <div className='contain-text-like-fs'>
                                        {products[3].favoriteCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Body1;