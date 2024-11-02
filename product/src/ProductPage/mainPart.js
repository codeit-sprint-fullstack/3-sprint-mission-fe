import React from "react";
import './mainPart.css';
import vector from '../image/Vector.png';
import Box from './choose.js';
import {Link} from "react-router-dom"; 
// import ProductList from "./product";

function MainPart() {
    return(
        <div>
            <div className='bunch'>
            <div>
                <h1 className='title'>판매 중인 상품</h1>
            </div>
            <div className='bundle'>
                <div className='search'>
                <img className='vectorImg' src={vector} alt='돋보기' />
                <input className='enterInput' type="text" placeholder='  검색할 상품을 입력해주세요.'/>
                </div>
                <Link to="registration">
                <button className='register'>상품 등록하기</button>
                </Link>
            </div>
            </div>
            <Box/>
      </div>
    )
}

export default MainPart;