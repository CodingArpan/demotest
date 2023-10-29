'use client'
import React from 'react'
import styles from '@/components/Homepage/PreviousEvents/PreviousEvents.module.css'
function PreviousEvents() {
    const leftScroll = () => {
        const target = document.querySelector('#galleryContainer');
        // console.log(target.scrollWidth);
        // console.log(target.scrollLeft);
        target.scrollTo({
            top: 0,
            left: target ? (target.scrollLeft - 270) : 0,
            behavior: "smooth",
        });
    }
    const rightScroll = () => {
        const target = document.querySelector('#galleryContainer');
        // console.log(target.scrollWidth);
        // console.log(target.scrollLeft);
        target.scrollTo({
            top: 0,
            left: target ? (target.scrollLeft + 270) : 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="section previousEvents">
            <p className={`title`}>previous Events</p>
            <div className={styles.eventNavBar}>
                <input className={styles.radiobtn} type="radio" name="events" id="Devloop1" defaultChecked />
                <label htmlFor='Devloop1' className={styles.event}>Devloop 1.0</label>
                <input className={styles.radiobtn} type="radio" name="events" id="Devloop2" />
                <label htmlFor='Devloop2' className={styles.event}>Devloop 2.0</label>
                <input className={styles.radiobtn} type="radio" name="events" id="Devloop3" />
                <label htmlFor='Devloop3' className={styles.event}>Devloop 3.0</label>
            </div>


            <div className={styles.eventInfo}>
                <div className={styles.infoCard}>
                    <p className={styles.infTitle}>Location</p>
                    <p className={styles.details}>Ganpat University, MBA Auditorium</p>
                </div>
                <div className={styles.infoCard}>
                    <p className={styles.infTitle}>Date & Time</p>
                    <p className={styles.details}>09:00 AM - 04:00 PM</p>
                </div>
                <div className={styles.infoCard}>
                    <p className={styles.infTitle}>Participants</p>
                    <p className={styles.details}>400+</p>
                </div>
            </div>

            <div id="galleryContainer" className={styles.galleryContainer}>
                <div className={styles.scrollBtn}>
                    <div className={styles.left} onClick={e => leftScroll()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.leftArrow} viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                fill='black' />
                        </svg>
                    </div>
                    <div className={styles.right} onClick={e => rightScroll()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.rightArrow} viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                                fill='black' />
                        </svg>
                    </div>
                </div>

                <div id="gallery" className={styles.gallery}>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.imgStyle} src="/community.jpg" alt="" />
                        <p className={styles.cardTitle}>Community Dinner</p>
                        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Expedita vero optio sint
                            consequatur iure
                        </p>
                        <span className={styles.btn}>Know more</span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default PreviousEvents