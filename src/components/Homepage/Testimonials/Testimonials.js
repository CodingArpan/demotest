import React from 'react'
import styles from '@/components/Homepage/Testimonials/Testimonials.module.css'
function Testimonials() {
    return (
        <div className="section testimonials">
            <p className={`title`}>Testimonials</p>
            <p className={styles.tagLine}>Let’s See what our<br />
                Participants talking about us</p>
            <div className={styles.circleConatiner}>
                <div className={styles.bigCircle}></div>
            </div>



            <div className={styles.feedbackContainer}>
                <div className={styles.feedbackCard}>
                    <div className={styles.profilePic}>
                        < img className={styles.imageStyle} src="/codingarpan.png" alt="" />
                    </div>
                    <div className={styles.name}>Arpan das</div>
                    <div className={styles.designation}>Senoir blockchain devloper</div>
                    <dev className={styles.feedback}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum vel, corrupti nobis atque repellendus, dolores in, </dev>
                </div>
                <div className={styles.feedbackCard}>
                    <div className={styles.profilePic}>
                        < img className={styles.imageStyle} src="/codingarpan.png" alt="" />
                    </div>
                    <div className={styles.name}>Arpan das</div>
                    <div className={styles.designation}>Senoir blockchain devloper</div>
                    <dev className={styles.feedback}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum vel, corrupti nobis atque repellendus, dolores in, </dev>
                </div>
                <div className={styles.feedbackCard}>
                    <div className={styles.profilePic}>
                        < img className={styles.imageStyle} src="/codingarpan.png" alt="" />
                    </div>
                    <div className={styles.name}>Arpan das</div>
                    <div className={styles.designation}>Senoir blockchain devloper</div>
                    <dev className={styles.feedback}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum vel, corrupti nobis atque repellendus, dolores in, </dev>
                </div>
                <div className={styles.feedbackCard}>
                    <div className={styles.profilePic}>
                        < img className={styles.imageStyle} src="/codingarpan.png" alt="" />
                    </div>
                    <div className={styles.name}>Arpan das</div>
                    <div className={styles.designation}>Senoir blockchain devloper</div>
                    <dev className={styles.feedback}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum vel, corrupti nobis atque repellendus, dolores in, </dev>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonials