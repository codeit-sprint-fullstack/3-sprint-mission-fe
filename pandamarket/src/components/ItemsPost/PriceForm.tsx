import styles from "@/components/ItemsPost/PriceForm.module.css";
import { useState, ChangeEvent } from "react";

interface PriceFormProps {
  updateFormData: (field: string, value: number) => void;
}

export default function PriceForm({ updateFormData }: PriceFormProps) {
  const [priceMessage, setPriceMessage] = useState<string>("");
  const [isPrice, setIsPrice] = useState<boolean>(true);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPrice = e.target.value;
    const priceReg = /^[0-9]+$/;

    if (currentPrice === "" || !priceReg.test(currentPrice)) {
      setPriceMessage("숫자로 입력해주세요");
      setIsPrice(false);
    } else {
      setPriceMessage("");
      setIsPrice(true);
    }

    updateFormData("price", Number(currentPrice));
  };

  return (
    <div className={styles.priceWrapper}>
      <label className={styles.priceText}>판매가격</label>
      <input
        type="text"
        style={{ border: isPrice ? "none" : "1px solid #F74747" }}
        placeholder="판매 가격을 입력해주세요"
        onChange={handlePriceChange}
        className={styles.priceInput}
      />
      <p className={styles.errorMsg}>{priceMessage}</p>
    </div>
  );
}