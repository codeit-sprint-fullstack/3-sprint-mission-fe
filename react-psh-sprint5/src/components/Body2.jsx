import '../css/body2.css';
// import { useEffect, useState } from 'react';

function Body2() {

    return (
        <div className='all-item'>
            <div className='all-item-header'>
                <div className='all-item-text'>판매 중인 상품</div>
                <div className='all-item-option'>
                    <input className='all-item-searchBox' placeholder='검색할 상품을 입력해주세요'></input>
                    <button className='all-item-addButton'>상품 등록하기</button>

                    <select className='selectBox'>
                        <option>최신순</option>
                        <option>좋아요순</option>
                    </select>

                </div>
            </div>

            <div className='all-item-header2'>
                <div className='all-item-text'>판매 중인 상품
                    <button className='all-item-addButton'>상품 등록하기</button>
                </div>
                <div className='all-item-option'>
                    <input className='all-item-searchBox' placeholder='검색할 상품을 입력해주세요'></input>
                    <select className='selectBox'>
                        <option>최신순</option>
                        <option>좋아요순</option>
                    </select>
                </div>
            </div>

            <div className='all-item-list'>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
                <div className="All-item-list-item">아이템</div>
            </div>
        </div>
    );
}

export default Body2;