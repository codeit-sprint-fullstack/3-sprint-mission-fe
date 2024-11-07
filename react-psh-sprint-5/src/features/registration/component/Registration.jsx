import HeaderItem from "../../item/components/HeaderItem";
import Footer from "../../../../shared/components/Footer";
import '../css/Registration.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationList from "../../api/RegistrationList";
import closeIcon from "../images/close.png"


function Registration() {
    const [productName, setProductName] = useState("");
    const [productIntro, setProductIntro] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [preTag, setPreTag] = useState("");
    const [productTag, setProductTag] = useState([]);

    const itemLinkStyle = {
        backgroundColor: productName && productIntro && productPrice ? "#3692FF" : "",
    };

    const itemLinkStyleName = {
        border: productName.length > 10 ? "2px solid red" : "",
    }

    const itemLinkStyleIntro = {
        border: productIntro.length > 0 && productIntro.length < 10 ? "2px solid red" : "",
    }

    const itemLinkStylePrice = {
        border: isNaN(Number(productPrice)) ? "2px solid red" : "",
    }

    const itemLinkStyleTag = {
        border: preTag.length >= 5 ? "2px solid red" : "",
    }

    const navigate = useNavigate();

    const onClickSubmit = async () => {
        if (productName && productIntro && productPrice) {
            const axiosProducts = await RegistrationList(productName, productIntro, productPrice, productTag);
            console.log(axiosProducts)
            if (axiosProducts) {
                alert("상품 등록이 완료되었습니다");
                navigate("/ProductDetails");
            }
        }
        if (!productName || !productIntro || !productPrice) {
            alert("모든 필드를 입력하세요");
        }
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (preTag.length < 5) {
                setProductTag(productTag => [...productTag, preTag]);
                setPreTag("");
                console.log(productTag);
                e.preventDefault();
            } else {
                alert("5글자 이내로 입력하세요");
                setPreTag("");
            }
        }
    }

    const DeleteClick = (e) => {
        const index = e.target.value;
        const newTags = [...productTag];
        newTags.splice(index, 1);
        setProductTag(newTags);
    }

    return (
        <>
            <HeaderItem />
            <div className='registration'>
                <div className='registration-main'>
                    <div className="registration-header">
                        <div className="registration-header-text">상품등록하기</div>
                        <button
                            onClick={onClickSubmit}
                            className="registration-header-button" style={itemLinkStyle}
                        >
                            등록
                        </button>
                    </div>

                    <div className="registration-text-input">
                        <div className="registration-text-name">
                            <div className="registration-text-input-sub">상품명</div>
                            <input
                                className="registration-text-name-input"
                                placeholder="상품명을 입력하세요"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                style={itemLinkStyleName}
                            />
                            <div className="input-err"
                                style={{ display: productName.length > 10 ? "block" : "none" }}>10자 이내로 입력해주세요</div>
                        </div>

                        <div className="registration-text-intro">
                            <div className="registration-text-input-sub">상품 소개</div>
                            <input
                                className="registration-text-intro-input"
                                placeholder="상품 소개를 입력해주세요"
                                value={productIntro}
                                onChange={(e) => setProductIntro(e.target.value)}
                                style={itemLinkStyleIntro}
                            />
                            <div className="input-err"
                                style={{ display: productIntro.length > 0 && productIntro.length < 10 ? "block" : "none" }}>10자 이상 입력해주세요</div>
                        </div>

                        <div className="registration-text-price">
                            <div className="registration-text-input-sub">판매가격</div>
                            <input
                                className="registration-text-price-input"
                                placeholder="판매 가격을 입력해주세요"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                style={itemLinkStylePrice}
                            />
                            <div className="input-err"
                                style={{ display: isNaN(Number(productPrice)) ? "block" : "none" }}>숫자로 입력해주세요</div>
                        </div>

                        <div className="registration-text-tag">
                            <div className="registration-text-input-sub">태그</div>
                            <input
                                className="registration-text-tag-input"
                                placeholder="태그를 입력해주세요"
                                value={preTag}
                                onKeyDown={onKeyDown}
                                onChange={(e) => setPreTag(e.target.value)}
                                style={itemLinkStyleTag}
                            />
                            <div className="input-err"
                                style={{ display: preTag.length >= 5 ? "block" : "none" }}>5글자 이내로 입력해주세요</div>
                            <div className="tag-list">
                                {productTag.map((tag, index) => (
                                    <div key={index} className="tag-item">#{tag}
                                        <button value={index}
                                            onClick={DeleteClick}
                                            className="tag-button"
                                        >
                                            <img src={closeIcon} alt="close" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Registration;