import React from "react";
import './main.css';
import { useState} from "react";

function IntroPart () {
    const [introMessage, setIntroMessage] =useState("");
    const [isIntro, setIsIntro] = useState(true);

    const onChangeIntro = (e) => {
        const currentIntro = e.target.value;
        
        if(currentIntro.length <= 10 || currentIntro.length >=101){
            setIntroMessage("10자 이상 입력해주세요");
            setIsIntro(false);
        }else{
            setIntroMessage('');
            setIsIntro(true);
        }
    }

    return (
        <div className="wrapper">
             <div>
                <h2 className="registertitle">상품 소개</h2>
                <textarea placeholder="상품 소개를 입력해주세요" 
                style={{border: isIntro === false ? "1px solid #F74747" : "none"}}
                type="string" className="introInput" onChange={onChangeIntro}/>
                <p className="msg">{introMessage}</p>
            </div>
        </div>
    )
}

export default IntroPart;