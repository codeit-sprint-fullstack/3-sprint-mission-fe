import styles from "@/components/ItemsPost/NameForm.module.css"
import { useState } from "react";

export default function NameForm({updateFormData}) {
  const [nameMessage, setNameMessage] = useState("");
  const [isName, setIsName] = useState(true);

  const handleNameChange = (e) => {
    updateFormData('name', e.target.value);
    const currentName = e.target.value;
    if(currentName ==="" || currentName.length >= 10){
      setNameMessage("10자 이내로 입력해주세요")
      setIsName(false);
    }else{
      setNameMessage('');
      setIsName(true);
    }
  }

  return (
    <div className={styles.nameWrapper}>
      <label className={styles.nameText}>상품명</label>
      <input
        type="text"
        style={{border: isName === false ? "1px solid #F74747" : "none"}}
        placeholder="상품명을 입력해주세요"
        onChange={handleNameChange}
        className={styles.nameInput}
      />
      <p className={styles.errorMsg}>{nameMessage}</p>
    </div>
  )
}

