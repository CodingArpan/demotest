import React from 'react'
import styles from '@/components/Homepage/Sponsors/Sponsors.module.css'
function Sponsors() {
  return (
    <div className="section sponsors">
      <p className={`title`}>Our Featured Sponsors</p>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
          <span className={styles.surfaceLine}></span>
        </div>
        <div className={styles.box}>
          <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
          <span className={styles.surfaceLine}></span>
        </div>
        <div className={styles.box}>
          <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
          <span className={styles.surfaceLine}></span>
        </div>
        <div className={styles.box}>
          <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
          <span className={styles.surfaceLine}></span>
        </div>
      </div>

      <div className="circle"></div>

    </div>
  )
}

export default Sponsors