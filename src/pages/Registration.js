import React, { useState, useEffect } from 'react';
import styles from './Registration.module.css';
import { registerProduct } from '../apis/ProductService(MongoDB)';

function Registration() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [isPriceValid, setIsPriceValid] = useState(true);

  useEffect(() => {
    setIsFormValid(name.trim() && description.trim() && price.trim() && isPriceValid);
  }, [name, description, price, isPriceValid]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const formatPrice = (value) => {
    const number = value.replace(/,/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handlePriceChange = (e) => {
    const inputValue = e.target.value;
    const numericPrice = parseFloat(inputValue.replace(/,/g, ''));

    // 가격 유효성 검사: 숫자 여부와 양수 여부 확인
    if (!isNaN(numericPrice) && numericPrice > 0) {
      setIsPriceValid(true);
    } else {
      setIsPriceValid(false);
    }

    const formattedPrice = formatPrice(inputValue);
    setPrice(formattedPrice);
  };

  const handleTagInputChange = (e) => setTagInput(e.target.value);

  const handleTagInputKeyPress = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput('');
      e.preventDefault();
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async () => {
    setShowErrors(true);

    if (!isFormValid) return;

    const formattedTags = tags.map(tag => tag.replace(/^#/, ''));
    const productData = {
      name,
      description,
      price: price.replace(/,/g, ''),
      tags: formattedTags,
    };

    try {
      const result = await registerProduct(productData);
      console.log('등록된 상품:', result);
      alert('상품이 성공적으로 등록되었습니다!');
      setName('');
      setDescription('');
      setPrice('');
      setTags([]);
      setShowErrors(false);
      setIsPriceValid(true);
    } catch (error) {
      console.error("상품 등록 중 오류:", error);
      alert('상품 등록 중 문제가 발생했습니다.');
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.maintitle}>상품등록하기</div>
        <button
          onClick={handleSubmit}
          className={`${styles.button} ${isFormValid ? styles.active : ''}`}
        >
          등록
        </button>

        <div className={styles.title}>상품명</div>
        {showErrors && !name && <span className={styles.error}>필수 항목입니다</span>}
        <input type="text" className={styles.input} value={name} onChange={handleNameChange} placeholder='상품명을 입력해주세요' />

        <div className={styles.title}>상품소개</div>
        {showErrors && !description && <span className={styles.error}>필수 항목입니다</span>}
        <textarea className={`${styles.input} ${styles.description}`} value={description} onChange={handleDescriptionChange} placeholder='상품 소개를 입력해주세요' />

        <div className={styles.title}>판매가격</div>
        {showErrors && !price && <span className={styles.error}>필수 항목입니다</span>}
        {!isPriceValid && <span className={styles.error}>판매가격은 양수로 입력해야 합니다</span>}
        <input
          type='text'
          className={styles.input}
          value={price}
          onChange={handlePriceChange}
          placeholder='판매 가격을 입력해주세요'
        />

        <div className={styles.title}>태그</div>
        <input
          type='text'
          className={styles.input}
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleTagInputKeyPress}
          placeholder='태그를 입력하고 엔터를 입력하세요'
        />

        <div>
          {tags.map((tag, index) => (
            <span key={index} className={styles.chip}>
              {tag}
              <span className={styles.chip_close} onClick={() => handleRemoveTag(index)}></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Registration;
