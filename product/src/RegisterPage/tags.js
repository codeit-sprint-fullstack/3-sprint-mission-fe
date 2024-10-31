import React from "react";
import './main.css';
import { useState} from "react";
import icon from '../image/ic_X.png';

function Tags() {

    const [tagMessage, setTagMessage] =useState("");
    const [isTag, setIsTag] =useState(true);
    const [tags, setTags] = useState([]);

    const onChangeTag = (e) => {
        const currentTag = e.target.value;
        if(currentTag === "" || currentTag.length >5){
            setTagMessage("5글자 이내로 입력해주세요");
            setIsTag(false);
        }else{
            setTagMessage('');
            setIsTag(true);
        }
    }

    const removeTags = (tagIdx) => {
        setTags(tags.filter((tag, idx) => idx !== tagIdx));
    };


    const handleKeyDown = (e) => {
        if (e.key !== "Enter")return;
        const value = e.target.value;
        if(value.length>5) return;
        if(!value.trim()) return ;
        setTags([...tags, value]);
        e.target.value = "";
        setTagMessage('');
    };

    return (
        <div className="wrapper">
            <>
                <div>
                    <h2 className="registertitle">태그</h2>
                    <input placeholder="태그를 입력해주세요" 
                     style={{border: isTag === false ? "1px solid #F74747" : "none"}}
                     onChange={onChangeTag}
                    type="string" className="input" onKeyDown={handleKeyDown} onInput={onChangeTag} />
                    < p className="msg">{tagMessage}</p>
                </div>
                 <ul className="tags">
                    {tags.map((tag, idx) => (
                    <li key={idx} className="tag-content">
                        <span>{tag}</span>
                        <span onClick={()=>removeTags(idx)}>
                            <img src={icon} alt="XIxon" className="tagimg"/>
                        </span>
                    </li>
                ))}
                 </ul>
            </>
        </div>
    )
}

export default Tags;