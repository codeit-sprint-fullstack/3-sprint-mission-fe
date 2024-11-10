import React from "react";
import './main.css';
import { useState} from "react";

function NamePart () {
    const [nameMessage, setNameMessage] = useState("");
    const [isName, setIsname] =useState(true);

     const onChangeName = (e) => {
        const currentName = e.target.value;
        if(currentName === ""  || currentName.length >=10 ){
            setNameMessage("10자 이내로 입력해주세요");
            setIsname(false);
        }else{
            setNameMessage('');
            setIsname(true);
        }
     }

    return(
        <div className="wrapper">
             <div>
                <h2 className="registertitle">상품명</h2>
                <input placeholder="상품명을 입력해주세요" 
                style={{border: isName === false ? "1px solid #F74747" : "none"}}
                type="string" className="input" onInput = {onChangeName}/>
                <p className="msg">{nameMessage}</p>
            </div>
        </div>
    )
}

export default NamePart;