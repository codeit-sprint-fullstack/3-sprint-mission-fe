import React from "react";
import './mainPart.css';
import vector from '../image/Vector.png';
import Box from './choose.js';
import Best from './best.js';

function MainPart() {
    return(
        <div>
            <div className='bestProduct'>
            <h1 className='title'>베스트 상품</h1>
            <p></p>
            <p></p>
            </div>
            <Best/>
            <div className='bunch'>
            <div>
                <h1 className='title'>판매 중인 상품</h1>
            </div>
            <div className='bundle'>
                <div className='search'>
                <img className='vectorImg' src={vector} alt='돋보기' />
                <input className='enterInput' type="text" placeholder='  검색할 상품을 입력해주세요.'/>
                </div>
                <button className='register'>상품 등록하기</button>
            </div>
            </div>
            <Box/>
      </div>
    )
}

export default MainPart;