import React, { useEffect, useState } from 'react';
import './BestProducts.css';

function BestProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://panda-market-api.vercel.app/products?offset=2&limit=4')
            .then(response => response.json())
            .then(data => {
                console.log('API 응답 데이터:', data); // API 응답 구조 확인
                setProducts(data.list.slice(2, 6)); // 4개만 설정
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching best products:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="best-products">
            <h2 className="bestname">베스트 상품</h2>
            <div className="product-grid">
                {loading ? (
                    <p>상품을 불러오는 중입니다...</p>
                ) : products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.images[0]} alt={product.name} /> {/* 이미지 URL 수정 */}
                            <div className="product-info">
                                <h3>{product.name}</h3> {/* 상품 이름 */}
                                <p>{product.price.toLocaleString()}원</p> {/* 가격 */}
                                <p>♡ {product.favoriteCount}</p> {/* 좋아요 수 */}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>표시할 상품이 없습니다.</p>
                )}
            </div>
        </section>
    );
}

export default BestProducts;
