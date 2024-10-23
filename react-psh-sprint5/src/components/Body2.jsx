import '../css/body2.css';
import getProductsList from '../api/getProductsList.jsx';
import { useEffect, useState } from 'react';

//윈도우 크기감지

function Body2() {
    const [products, setProducts] = useState([]);
    const [option, setOption] = useState('recent');
    const [tempSearch, setTempSearch] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    const updateProducts = async () => {
        const axiosProducts = await getProductsList(page, search, option, pageSize);
        setProducts(axiosProducts.products);
        setTotalCount(axiosProducts.totalCount);
    };

    useEffect(() => {
        updateProducts();
    }, [page, search, option, pageSize]);


    useEffect(() => {
        const windowSize = () => {
            const width = window.innerWidth;
            console.log(`현재 화면 너비: ${width}px`);
            if (width >= 1230) {
                setPageSize(10);
            } else if (width >= 801 && width < 1230) {
                setPageSize(6);
            } else {
                setPageSize(4);
            }
            console.log({pageSize});
        };
        
        windowSize();
        window.addEventListener('resize', windowSize);

        return () => {
            window.removeEventListener('resize', windowSize);
        };
    }, [pageSize]);

    useEffect(() => {
        updateProducts(page, search, option, pageSize);
    }, [page, search, option, pageSize]);

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
        setPage(1);
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClickSearch();
            setPage(1);
        }
    }
    const onChangeSortOption = (e) => {
        setOption(e.target.value);
    }
    const onClickPage = (e) => {
        setPage(e.target.value);
    }

    const onClickPagePlus = () => {
        if ((pageSize % products.length === 0))
            setPage(parseInt(page) + 1);
    }

    const onClickPageMinus = () => {
        if (page > 1) {
            setPage(parseInt(page) - 1);
        }
    }

    useEffect(() => {
        console.log('page : ', { page });
        console.log('totalcount : ', { totalCount });
    }, [page, totalCount]);

    const filteredSearch = filterProductsBySearch();

    return (
        <div className='all-item'>
            <div className='all-item-header'>
                <div className='all-item-text'>판매 중인 상품</div>
                <div className='all-item-option'>
                    <div className='all-item-searchBox-container'>
                        <input value={tempSearch}
                            onKeyDown={onKeyDown}
                            onChange={onChangeSearch} className='all-item-searchBox' placeholder='검색할 상품을 입력해주세요'>
                        </input>
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

            <div className="number-box">
                <button onClick={onClickPageMinus} className='buttonNum'>
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>
                <button value={1} onClick={onClickPage} className='buttonNum'>1</button>
                <button value={2} onClick={onClickPage} className='buttonNum'>2</button>
                <button value={3} onClick={onClickPage} className='buttonNum'>3</button>
                <button value={4} onClick={onClickPage} className='buttonNum'>4</button>
                <button value={5} onClick={onClickPage} className='buttonNum'>5</button>
                <button onClick={onClickPagePlus} className='buttonNum'>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
                <div>
                    {page}
                </div>
                <div></div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default Body2;