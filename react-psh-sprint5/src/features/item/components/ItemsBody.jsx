import expressList from '../../../api/expressList';
import { useEffect, useState } from 'react';
import DefaultImage from '../../images/sprint6Image.svg';
import { Link } from 'react-router-dom';

function ItemsBody() {
    const [products, setProducts] = useState([]);
    const [option, setOption] = useState('favorite');
    const [tempSearch, setTempSearch] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    const totalPages = Math.ceil(totalCount / pageSize);
    const startPage = ~~((page - 1) / 5) * 5 + 1;

    const updateProducts = async () => {
        const axiosProducts = await expressList(page, search, option, pageSize);
        setProducts(axiosProducts.products);
        setTotalCount(axiosProducts.totalCount);
    };

    useEffect(() => {
        const windowSize = () => {
            const width = window.innerWidth;
            if (width >= 1230) setPageSize(10);
            if (width >= 801 && width < 1230) setPageSize(6);
            if (width < 800) setPageSize(4);
        };

        windowSize();
        window.addEventListener('resize', windowSize);

        return () => {
            window.removeEventListener('resize', windowSize);
        };
    }, [pageSize]);

    useEffect(() => {
        if (totalPages > 0 & page > totalPages) setPage(totalPages);
    }, [pageSize, totalPages]);

    useEffect(() => {
        if (page > 0) updateProducts(page, search, option, pageSize);
    }, [page, search, option, pageSize]);

    const filterProductsBySearch = () => {
        if (!search) return products;
        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
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

    const filteredSearch = filterProductsBySearch();

    return (
        <div className='items'>
            <div className='items-main'>
                <div className='items-header'>
                    <div className='items-text'>판매 중인 상품</div>
                    <div className='items-option'>
                        <div className='items-searchBox-container'>
                            <input value={tempSearch}
                                onKeyDown={onKeyDown}
                                onChange={onChangeSearch} className='items-searchBox ' placeholder='검색할 상품을 입력해주세요'>
                            </input>
                            <a onClick={onClickSearch} className='items-searchButton'>
                                <span className="material-symbols-outlined search-icon">
                                    search
                                </span>
                            </a>
                        </div>
                        <Link to="/registration"><button className='items-addButton'>상품 등록하기</button></Link>

                        <select
                            className='items-selectBox'
                            value={option}
                            onChange={onChangeSortOption}
                        >
                            <option value="recent">최신순</option>
                            <option value="favorite">좋아요순</option>
                        </select>
                    </div>
                </div>

                <div className='items-header2'>
                    <div className='items-text'>판매 중인 상품
                        <button className='items-addButton'>상품 등록하기</button>
                    </div>
                    <div className='items-option'>
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

                <div className='items-list'  >
                    {products.length === 0 ? (<p className='none-product'>상품이 없습니다.</p>) :
                        (products.map((product, index) => (
                            <div key={index} className='items-list-item'>
                                <div className='contain-img'>
                                    <img src={DefaultImage} alt={product.name} />
                                </div>
                                <div className='item-list-contain-text'>
                                    <div className='item-list-contain-text-product-des'>{product.name}</div>
                                    <div className='item-list-contain-text-price'>{product.price}원</div>
                                    <div className='item-list-contain-text-like'>
                                        <a className='like-button'>
                                            <span className="material-symbols-outlined favorite-icon">
                                                favorite
                                            </span>
                                        </a>
                                        240</div>
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
        </div>
    );
}

export default ItemsBody;