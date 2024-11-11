import React from 'react'
import styles from './SearchSection.module.css'

function SearchSection() {
  return (
    <section className={styles.search_section}>
      <div className={styles.search_box}>
        <div className={styles.search_p}>
          <span>Search</span>
          <p>구매를 원하는<br />상품을 검색하세요</p>
          <div>구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요</div>
        </div>
        <img src="static/images/Img_home_02.png" alt="search product" />
      </div>
    </section>
  )
}

export default SearchSection