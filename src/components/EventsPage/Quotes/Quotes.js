import React from 'react'
import styles from '@/components/EventsPage/Quotes/Quotes.module.css'
function Quotes() {
    return (
        <div className="section quotes">
            <div className={styles.quotesContainer}>

                <div className={styles.quote}>
                    <div className={styles.num}>1</div>
                    <div className={styles.quoteTitle}>Everything For Everyone</div>
                    <span className={styles.blueUnderline}></span>
                    <p className={styles.quoteDesc}>
                        Devloop is all inclusive in terms of diversity, community, background, and every such fancy word. We have carefully chosen the tracks so we keep everybody interested!
                    </p>
                </div>
                <div className={styles.quote}>
                    <div className={styles.num}>2</div>
                    <div className={styles.quoteTitle}>Adopt And Evolve</div>
                    <span className={styles.redUnderline}></span>
                    <p className={styles.quoteDesc}>
                    Learning everything is not a goal but to give you taste of each technology is our main aim. You see, you learn, you adopt and you evolve your skills for the best!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Quotes