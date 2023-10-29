import React from 'react'
import styles from '@/components/Homepage/Sponsors_scroll/Sponsors_scroll.module.css'
function Sponsors_scroll() {
  return (
    <div className={`section sponsors`}>
      <p className={`title`}>Our Sponsors</p>
      <div className={styles.primeBoxContainer}>
        <div className={styles.ltorGradient}></div>
        <marquee className={styles.marquee} scrollamount="5" behavior="scroll" direction="right" width="500">
          <div className={styles.superBoxContainer}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                1
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                2
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                3
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                4
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                1
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                2
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                3
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                4
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                1
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                2
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                3
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
              <div className={styles.box}>
                4
                <img className={styles.sponsorImg} src="/vercel.svg" alt="" />
                <span className={styles.surfaceLine}></span>
              </div>
            </div>

          </div>
        </marquee>
        <div className={styles.rtolGradient}></div>

      </div>
      <div className="circle"></div>

    </div>
  )
}

export default Sponsors_scroll