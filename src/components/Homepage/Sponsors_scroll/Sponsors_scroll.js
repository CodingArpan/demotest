import React from 'react'
import styles from '@/components/Homepage/Sponsors_scroll/Sponsors_scroll.module.css'
import Image from 'next/image'


function Sponsors_scroll() {

  const sponsors = ["/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
    "/hackplus.png",
  ]
  return (
    <div className={`section sponsors`}>
      <p className={`title`}>Our Sponsors</p>
      <div className={styles.primeBoxContainer}>
        <div className={styles.ltorGradient}></div>
        <marquee className={styles.marquee} scrollamount="5" behavior="scroll" direction="right" width="500">
          <div className={styles.superBoxContainer}>
            <div className={styles.boxContainer}>
              {
                sponsors.map((sponsor, index) => {
                  return <div key={index} className={styles.box}>
                    {index}
                    <div className={styles.sponsorImg}>
                      <div className={styles.imgStyle}>
                        <Image fill src={sponsor} alt="" />
                      </div>
                    </div>
                    <span className={styles.surfaceLine}></span>
                  </div>
                })
              }
            </div>
            <div className={styles.boxContainer}>
              {
                sponsors.map((sponsor, index) => {
                  return <div key={index} className={styles.box}>
                    {index}
                    <div className={styles.sponsorImg}>
                      <div className={styles.imgStyle}>
                        <Image fill src={sponsor} alt="" />
                      </div>
                    </div>
                    <span className={styles.surfaceLine}></span>
                  </div>
                })
              }
            </div>
            <div className={styles.boxContainer}>
              {
                sponsors.map((sponsor, index) => {
                  return <div key={index} className={styles.box}>
                    {index}
                    <div className={styles.sponsorImg}>
                      <div className={styles.imgStyle}>
                        <Image fill src={sponsor} alt="" />
                      </div>
                    </div>
                    <span className={styles.surfaceLine}></span>
                  </div>
                })
              }
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