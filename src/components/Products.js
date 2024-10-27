import React, { useEffect, useState } from 'react';
import './ProductList.css';

function BestProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
    const [sortOption, setSortOption] = useState('latest'); // 정렬 옵션 상태
    const itemsPerPage = 5;

    useEffect(() => {
        fetch('https://panda-market-api.vercel.app/products?offset=0&limit=50')
            .then(response => response.json())
            .then(data => {
                setProducts(data.list);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching best products:', error);
                setLoading(false);
            });
    }, []);

    // 검색 및 정렬 로직
    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === 'latest') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (sortOption === 'favorite') {
                return b.favoriteCount - a.favoriteCount;
            }
            return 0;
        });

    // 현재 페이지에 해당하는 상품 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="product-list">
            <div className="product-list-header">
                <h2 className="product-list-title">판매 중인 상품</h2>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="검색할 상품을 입력해주세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                 <button className="add-product-button">상품 등록하기</button>
                <select
                    className="sort-dropdown"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="latest">최신순</option>
                    <option value="favorite">좋아요순</option>
                </select>
            </div>
            <div className="product-list-grid">
                {loading ? (
                    <p>상품을 불러오는 중입니다...</p>
                ) : currentProducts.length > 0 ? (
                    currentProducts.map(product => (
                        <div key={product.id} className="product-list-card">
                            <img src={product.images[0]} alt={product.name} />
                            <div className="product-list-info">
                                <h3>{product.name}</h3>
                                <p>{product.price.toLocaleString()}원</p>
                                <p>♡ {product.favoriteCount}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>표시할 상품이 없습니다.</p>
                )}
            </div>
            <div className="product-list-pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default BestProducts;

