import styles from "@/components/ItemsPost/PriceForm.module.css"
import { useState } from "react";

export default function PriceForm({ updateFormData}) {
  const [priceMessage, setPriceMessage] =useState("");
  const [isPrice, setIsPrice] = useState(true);

  const handlePriceChange = (e) => {
    updateFormData('price', Number(e.target.value));

    const currentPrice = e.target.value;
    const priceReg = /[0-9]/;

    if(currentPrice.length === "" || !priceReg.test(currentPrice)){
      setPriceMessage("숫자로 입력해주세요");
      setIsPrice(false);
    }else{
      setPriceMessage('');
      setIsPrice(true);
    }
  };

  return(
    <div className={styles.priceWrapper}> 
      <label className={styles.priceText}>판매가격</label>
      <input 
        type="string" 
        style={{border: isPrice === false ? "1px solid #F74747" : "none"}}
        placeholder="판매 가격을 입력해주세요요" 
        onChange={handlePriceChange} 
        className={styles.priceInput}
      />
      <p className={styles.errorMsg}>{priceMessage}</p>
    </div>
  )
}


