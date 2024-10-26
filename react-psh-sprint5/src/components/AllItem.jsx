import '../css/body2.css';
import getProductsList from '../api/getProductsList.jsx';
import { useEffect, useState } from 'react';

function Body2() {
    const [products, setProducts] = useState([]);
    const [option, setOption] = useState('recent');
    const [tempSearch, setTempSearch] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    const totalPages = Math.ceil(totalCount / pageSize);
    const startPage = Math.floor((page - 1) / 5) * 5 + 1;

    const updateProducts = async () => {
        const axiosProducts = await getProductsList(page, search, option, pageSize);
        setProducts(axiosProducts.products);
        setTotalCount(axiosProducts.totalCount);
    };

    useEffect(() => {
        if (page > 0) {
            updateProducts();
        }
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
        };

        windowSize();
        window.addEventListener('resize', windowSize);

        return () => {
            window.removeEventListener('resize', windowSize);
        };
    }, [pageSize]);

    useEffect(() => {
        if (totalPages > 0 & page > totalPages) {
            setPage(totalPages);
        }
    }, [pageSize, totalPages]);

    useEffect(() => {
        if (page > 0) {
            updateProducts(page, search, option, pageSize);
        }
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
        setPage(Number(e.target.value));
    }

    const onClickPagePlus = () => {
        if (page < totalPages) setPage(page + 1);
    }

    const onClickPageMinus = () => {
        if (page > 1) setPage(page - 1);
    };

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
                <button
                    onClick={onClickPageMinus}
                    className={`buttonNum ${page === 1 ? 'disabled' : ''}`}
                    disabled={page === 1}
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {startPage <= totalPages && (
                    <button
                        value={startPage}
                        onClick={onClickPage}
                        className={`buttonNum ${page === startPage ? 'active' : ''}`}
                    >
                        {startPage}
                    </button>
                )}
                {startPage + 1 <= totalPages && (
                    <button
                        value={startPage + 1}
                        onClick={onClickPage}
                        className={`buttonNum ${page === startPage + 1 ? 'active' : ''}`}
                    >
                        {startPage + 1}
                    </button>
                )}
                {startPage + 2 <= totalPages && (
                    <button
                        value={startPage + 2}
                        onClick={onClickPage}
                        className={`buttonNum ${page === startPage + 2 ? 'active' : ''}`}
                    >
                        {startPage + 2}
                    </button>
                )}
                {startPage + 3 <= totalPages && (
                    <button
                        value={startPage + 3}
                        onClick={onClickPage}
                        className={`buttonNum ${page === startPage + 3 ? 'active' : ''}`}
                    >
                        {startPage + 3}
                    </button>
                )}
                {startPage + 4 <= totalPages && (
                    <button
                        value={startPage + 4}
                        onClick={onClickPage}
                        className={`buttonNum ${page === startPage + 4 ? 'active' : ''}`}
                    >
                        {startPage + 4}
                    </button>
                )}

                <button
                    onClick={onClickPagePlus}
                    className={`buttonNum ${page === totalPages ? 'disabled' : ''}`}
                    disabled={page === totalPages}
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    );
}

export default Body2;