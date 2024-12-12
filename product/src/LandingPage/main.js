import React from "react";
import './landingmain.css';
import Feature1 from '../image/home/feature1-image.png';
import Feature2 from '../image/home/feature2-image.png';
import Feature3 from '../image/home/feature3-image.png';
import {Link} from "react-router-dom";


function MainPart() {
    return (
        <main>
            <section className="hero">
                <div className="wrapper">
                    <h1 className="feature-title">
                        일상의 모든 물건을<br/>
                        거래해 보세요
                    </h1>
                    <Link to="items">
                    <button className="see-button">구경하러 가기</button>
                    </Link>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <img src={Feature1} alt="인기상품" className="imgSize" />
                    <div className="feature-content"> 
                        <h2 className="feature-tag">Hot item</h2>
                        <h1 className="feature-title">인기 상품을<br /> 확인해 보세요</h1>
                        <p className="feature-description">
                            가장 HOT한 중고거래 물품을<br />판다마켓에서 확인해 보세요
                        </p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-content">
                        <h2 className="feature-tag">Search</h2>
                        <h1 className="feature-title">구매를 원하는<br />상품을 검색하세요</h1>
                        <p className="feature-description">
                            구매하고 싶은 물품은 검색해서
                            <br />쉽게 찾아보세요
                        </p>
                    </div>
                    <img src={Feature2} alt="검색 기능"  className="imgSize" />
                </div>
                <div className="feature">
                    <img src={Feature3} alt="판매 상품 등록" className="imgSize"/>
                    <div className="feature-content">
                        <h2 className="feature-tag">Register</h2>
                        <h1 className="feature-title">판매를 원하는<br />상품을 등록하세요</h1>
                        <p className="description">
                            어떤 물건이든 판매하고 싶은 상품을
                            <br /> 쉽게 등록하세요
                        </p>
                    </div>
                </div>
            </section>

            <section className="bottom">
                <div className="wrapper">
                    <h1 className="feature-title">
                        믿을 수 있는
                        <br />
                        판다마켓 중고거래
                    </h1>
                </div>
            </section>
        </main>
    )
}

export default MainPart;