import styles from "@/components/ItemsPost/TagsForm.module.css"
import Image from "next/image";
import { useState} from "react";

export default function TagsForm({ updateFormData}) {
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


    const handleKeyDown = (e) => {
        if (e.key !== "Enter")return;
        const value = e.target.value;
        if(value.length>5) return;
        if(!value.trim()) return ;
        setTags([...tags, value]);
        e.target.value = "";
        setTagMessage('');
    };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    updateFormData('tags', newTags);
  };

  return (
    <div className={styles.tagWrapper}>
     <div className={styles.tagContainer}>
      <label className={styles.tagText}>태그</label>
      <input 
        placeholder="태그를 입력해주세요" 
        style={{border: isTag === false ? "1px solid #F74747" : "none"}}
        onChange={onChangeTag}
        type="string" 
        className={styles.tagInput} 
        onKeyDown={handleKeyDown} 
        onInput={onChangeTag} 
      />
        < p className={styles.errorMsg}>{tagMessage}</p>
      </div>
      <ul className={styles.tagBtnSection}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            #{tag}
            <button type="button" onClick={() => handleRemoveTag(index)}>
              <Image
                className={styles.tagIcon}
                src="/images/ic_x.png"
                width={22} height={24}
                alt="X Icon"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
