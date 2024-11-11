import React from 'react'
import styles from './PopularProducts.module.css'

function PopularProducts() {
  return (
    <section className={styles.popular_products}>
      <div className={styles.popular_box}>
        <img src="/static/images/Img_home_01.png" alt="popular product" />
        <div className={styles.popular_p}>
          <span>Hot item</span>
          <p>인기 상품을<br />확인해 보세요</p>
          <div>가장 HOT한 중고거래 물품을<br />판다 마켓에서 확인해 보세요</div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts