import React from 'react'
import styles from './RegisterProduct.module.css'

function RegisterProduct() {
  return (
    <section className={styles.register_product}>
      <div className={styles.register_box}>
        <img src="/static/images/Img_home_03.png" alt="register product" />
        <div className={styles.register_p}>
          <span>Register</span>
          <p>판매를 원하는<br />상품을 등록하세요</p>
          <div>어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요</div>
        </div>
      </div>
    </section>
  )
}

export default RegisterProduct