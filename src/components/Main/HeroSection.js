import React from 'react'
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_box}>
        <div className={styles.hero_p}>
          <p>일상의 모든 물건을<br />거래해 보세요</p>
          <Link to="/items">
            <div className={styles.go_button}>구경하러 가기</div>
          </Link>
        </div>
        <img src="/static/images/Img_home_top.png" alt="look around" className={styles.hero_img1} />
      </div>
    </section>
  )
}

export default HeroSection