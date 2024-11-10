import React from "react";
import './main.css';
import { useState} from "react";

function PricePart() {
    const [priceMessage, setPriceMessage] =useState("");
    const [isPrice, setIsPrice] = useState(true);
    

    const onChangePrice = (e) => {
        const currentPrice = e.target.value;
    
        const priceReg = /[0-9]/;

        if(currentPrice.length === "" || !priceReg.test(currentPrice)){
            setPriceMessage("숫자로 입력해주세요");
            setIsPrice(false);
        }else{
            setPriceMessage('');
            setIsPrice(true);
        }
    }

    return (
        <div className="wrapper">
            <div>
                <h2 className="registertitle">판매가격</h2>
                <input placeholder="판매 가격을 입력해주세요" 
                style={{border: isPrice === false ? "1px solid #F74747" : "none"}}
                type="string" className="input" onChange={onChangePrice} />
                <p className="msg">{priceMessage}</p>
            </div>
        </div>
    )
}

export default PricePart;