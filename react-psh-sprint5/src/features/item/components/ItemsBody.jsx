import expressList from '../../api/expressList';
import { useEffect, useState } from 'react';
import DefaultImage from '../images/sprint6Image.svg';
import { Link } from 'react-router-dom';

function ItemsBody() {
    const [products, setProducts] = useState({ products: [], totalCount: 0 });

    //const object로 정의하여 enum처럼 사용해보기
    const options = {
        favorite: 'favorite',
        recent: 'recent'
    }
    const [option, setOption] = useState(options.recent);

    // 사용자가 검색어를 입력할때 keyword를 onchange를 이용하여 searchInput에 담게 하고,
    // 검색하기 버튼을 누를때 useEffect로 searchQuery를 전달하였습니다.(검색 버튼을 눌렀을때만 렌더링이 되게 하기위해)
    // 변수명 수정
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const totalPages = Math.ceil(products.totalCount / pageSize);
    //Math 객체의 method를 사용
    //화면에 보여지는 버튼의 최대 개수를 상수로 선언하여 사용
    const pageNationMax = 5;
    const startPage = Math.floor((page - 1) / pageNationMax) * pageNationMax + 1;

    const updateProducts = async () => {
        const axiosProducts = await expressList(page, searchQuery, option, pageSize);
        setProducts({
            products: axiosProducts.products,
            totalCount: axiosProducts.totalCount
        });     //객체자체를 state로 가져가 점표기법으로 사용하기
    };

    //중괄호 작성하여 코드 가독성 개선
    useEffect(() => {
        const windowSize = () => {
            const width = window.innerWidth;
            if (width >= 1230) {
                setPageSize(10);
            }
            if (width >= 801 && width < 1230) {
                setPageSize(6);
            }
            if (width < 800) {
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
        if (totalPages > 0 & page > totalPages) setPage(totalPages);
    }, [pageSize, totalPages]);

    useEffect(() => {
        if (page > 0) updateProducts(page, searchQuery, option, pageSize);
    }, [page, searchQuery, option, pageSize]);

    const filterProductsBySearch = () => {
        if (!searchQuery) return products;
        return products.products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const onChangeSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const onClickSearch = () => {
        setSearchQuery(searchInput);
        setSearchInput("");
        setPage(1);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClickSearch();
            setPage(1);
        }// 엔터키를 눌렀을때 검색이 되도록 하기위해 설정하였습니다.
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
                            <input value={searchInput}
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
                            <input value={searchInput}
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
                    {products.products.length === 0 ? (<p className='none-product'>상품이 없습니다.</p>) :
                        (products.products.map((product, index) => (
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

                    {/* 임의의 length 5짜리 배열 만들어서 map사용해 페이지네이션 구현해보기 */}
                    {[0, 1, 2, 3, 4].map((x) => {
                        const pageNumber = startPage + x;
                        return (
                            pageNumber <= totalPages && (
                                <button
                                    key={x}
                                    value={pageNumber}
                                    onClick={onClickPage}
                                    className={`buttonNum ${page === pageNumber ? 'active' : ''}`}
                                >
                                    {pageNumber}
                                </button>
                            )
                        );
                    })}

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