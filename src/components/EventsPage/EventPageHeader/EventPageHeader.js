import React from 'react'
import styles from '@/components/EventsPage/EventPageHeader/EventPageHeader.module.css'
function EventPageHeader() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.eventbanner}>
                    <img className={styles.imageStyle} src="/Devloop2.0.png" alt="" />
                </div>
                <div className={styles.tagline}>Lorem ipsum dolor sit amet consectetur
                    qui provident ea assumenda doloremque?
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.colorBorder}>
                        <div className={styles.btnRegister}>  Register Now</div>
                    </button>
                    <button className={styles.btnSpeakers}>our speakers</button>
                </div>

            </div>
        </header>
    )
}

export default EventPageHeader