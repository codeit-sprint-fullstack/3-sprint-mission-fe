import '../css/body2.css';
import { useEffect, useState } from 'react';
import getProductsList from '../api/getProductsList.jsx';

function Body2() {
    const [products, setProducts] = useState([]);
    const [option, setOption] = useState('recent');
    const [tempSearch, setTempSearch] = useState("");
    const [search, setSearch] = useState("갤럭시");

    const updateProducts = async () => {
        const axiosProducts = await getProductsList(search, option);
        setProducts(axiosProducts);
    };

    useEffect(() => {
        updateProducts(search, option);
    }, [search, option]);

    const filterProductsBySearch = () => {
        if (!search) return products;
        return products.filter((products) =>
            products.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    const onChangeSearch = (e) => {
        setTempSearch(e.target.value);
    }

    const onClickSearch = () => {
        setSearch(tempSearch);
        setTempSearch("");
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClickSearch();
        }
    }
    const onChangeSortOption = (e) => {
        setOption(e.target.value);
    };

    const filteredSearch = filterProductsBySearch();
    return (
        <div className='all-item'>
            <div className='all-item-header'>
                <div className='all-item-text'>판매 중인 상품</div>
                <div className='all-item-option'>
                    <div className='all-item-searchBox-container'>
                        <input value={tempSearch}
                            onKeyDown={onKeyDown}
                            onChange={onChangeSearch} className='all-item-searchBox' placeholder='검색할 상품을 입력해주세요'></input>
                        <a onClick={onClickSearch} className='all-item-searchButton'>
                            <span className="material-symbols-outlined search-icon">
                                search
                            </span>
                        </a>
                    </div>
                    <button className='all-item-addButton'>상품 등록하기</button>

                    <select
                        className='selectBox'
                        value={option}
                        onChange={onChangeSortOption}
                    >
                        <option value="recent">최신순</option>
                        <option value="favorite">좋아요순</option>
                    </select>

                </div>
            </div>

            <div className='all-item-header2'>
                <div className='all-item-text'>판매 중인 상품
                    <button className='all-item-addButton'>상품 등록하기</button>
                </div>
                <div className='all-item-option'>
                    <div className='all-item-searchBox-container'>
                        <input value={tempSearch}
                            onKeyDown={onKeyDown}
                            onChange={onChangeSearch} className='all-item-searchBox' placeholder='검색할 상품을 입력해주세요'></input>
                        <a onClick={onClickSearch} className='all-item-searchButton'>
                            <span className="material-symbols-outlined search-icon">
                                search
                            </span>
                        </a>
                    </div>

                    <select
                        className='selectBox'
                        value={option}
                        onChange={onChangeSortOption}
                    >
                        <option value="recent">최신순</option>
                        <option value="favorite">좋아요순</option>
                    </select>

                </div>
            </div>

            <div className='all-item-list'>
                {products.length === 0 ? (<p className='none-product'>상품이 없습니다.</p>) :
                    (products.map((product, index) => (
                        <div key={index} className='All-item-list-item'>
                            <div className='contain-img'>
                                <img src={product.images[0]} alt={product.name} />
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
                                    {product.favoriteCount}</div>
                            </div>
                        </div>
                    ))
                    )}
            </div>
        </div>
    );
}

export default Body2;