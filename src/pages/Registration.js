import React from 'react'
import styles from './Registration.module.css'

function Registration() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.maintitle}>상품등록하기</div>
        <div className={styles.button}>등록</div>
        <div className={styles.title}>상품명</div>
        <input type="text" className={styles.input} placeholder='상품명을 입력해주세요' />
        <div className={styles.title}>상품소개</div>
        <textarea className={`${styles.input} ${styles.description}`} placeholder='상품 소개를 입력해주세요' />
        <div className={styles.title}>판매가격</div>
        <input type='text' className={styles.input} placeholder='판매 가격을 입력해주세요' />
        <div className={styles.title}>태그</div>
        <input type='text' className={styles.input} placeholder='태그를 입력해주세요' />
        <div>
          <span className={styles.chip}>#티셔츠</span><span className={styles.chip}>#상의</span>
        </div>
      </div>
    </div>
  )
}

export default Registration

// className={styles.}