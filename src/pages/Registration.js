import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const formatPrice = (value) => {
    const number = value.replace(/,/g, ''); // 콤마 제거
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 세 자리마다 콤마 추가
  };

  const handlePriceChange = (e) => {
    const formattedPrice = formatPrice(e.target.value);
    setPrice(formattedPrice);
  };

  const handleTagInputChange = (e) => setTagInput(e.target.value);

  const handleTagInputKeyPress = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      setTags((prevTags) => [...prevTags, `#${tagInput.trim()}`]);
      setTagInput('');
      e.preventDefault();
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = () => {
    const formattedTags = tags.map(tag => tag.replace(/^#/, '')); // #을 제거
    const productData = {
      name,
      description,
      price: price.replace(/,/g, ''), // 콤마 제거된 값으로 설정
      tags: formattedTags // # 없는 태그들로 설정
    };

    console.log('등록할 상품 데이터:', productData);
    // 서버로 productData 전송
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.maintitle}>상품등록하기</div>
        <button onClick={handleSubmit} className={styles.button}>등록</button>

        <div className={styles.title}>상품명</div>
        <input type="text" className={styles.input} value={name} onChange={handleNameChange} placeholder='상품명을 입력해주세요' />

        <div className={styles.title}>상품소개</div>
        <textarea className={`${styles.input} ${styles.description}`} value={description} onChange={handleDescriptionChange} placeholder='상품 소개를 입력해주세요' />

        <div className={styles.title}>판매가격</div>
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
              <span
                className={styles.chip_close}
                onClick={() => handleRemoveTag(index)}
              ></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Registration;
