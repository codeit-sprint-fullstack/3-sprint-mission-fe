import React from 'react'
import styles from './WeAreSection.module.css'

function WeAreSection() {
  return (
    <section className={styles.we_are}>
      <div className={styles.we_are_box}>
        <div className={styles.we_are_p}>믿을 수 있는<br />판다 마켓 중고거래</div>
        <img src="/static/images/Img_home_bottom.png" alt="panda bottom" className={styles.sc5_img5} />
      </div>
    </section >
  )
}

export default WeAreSection