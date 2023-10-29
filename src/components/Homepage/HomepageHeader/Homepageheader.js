import React from 'react'
import styles from '@/components/Homepage/HomepageHeader/Homepageheader.module.css'
function Homepageheader() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.eventbanner}>
                    <div className={styles.mehsana}>mehsana.</div>
                    <div className={styles.devlopers}>devlopers.</div>
                    <div className={styles.club}>club.</div>
                </div>
                <div className={styles.tagline}>Lorem ipsum dolor sit amet consectetur
                    qui provident ea assumenda doloremque? Lorem ipsum dolor sit amet consectetur adipisicing
                    m dolor sit amet consectetur adipisicing
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.colorBorder}>
                        <div className={styles.btnRegister}> Subscribe for upcoming events</div>
                    </button>
                    {/* <button className={styles.btnSpeakers}>our speakers</button> */}
                </div>

                <div className={styles.mdcContainer}>
                    <div className={styles.mdc}>
                        <img className={styles.imgStyle} src="/MDC.png" alt="MDC" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Homepageheader