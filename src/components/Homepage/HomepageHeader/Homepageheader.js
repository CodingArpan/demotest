import React from 'react'
import Image from 'next/image'
import styles from '@/components/Homepage/HomepageHeader/Homepageheader.module.css'
function Homepageheader() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.eventbanner}>
                    <div className={styles.mehsana}>midnapur.</div>
                    <div className={styles.devlopers}>developers.</div>
                    <div className={styles.club}>club.</div>
                </div>
                
                <div className={styles.tagline}>
                    Just An Awesome Community <br />
                    We collaborate to create impact!
                </div>

                <div className={styles.btnContainer}>
                    <button className={styles.colorBorder}>
                        <div className={styles.btnRegister}> Subscribe for upcoming events</div>
                    </button>
                    {/* <button className={styles.btnSpeakers}>our speakers</button> */}
                </div>

                <div className={styles.mdcContainer}>
                    <div className={styles.imgStyle}>
                        <Image fill src="/MDC.png" alt="MDC" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Homepageheader