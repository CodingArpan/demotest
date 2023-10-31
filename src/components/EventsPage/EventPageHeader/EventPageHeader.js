'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import styles from '@/components/EventsPage/EventPageHeader/EventPageHeader.module.css'
function EventPageHeader() {
    const path = usePathname();
    console.log(path);
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.eventbanner}>
                    <div className={styles.imageStyle}>
                        <Image fill src="/Devloop2.0.png" alt="" />
                    </div>
                </div>
                <div className={styles.tagline}>Lorem ipsum dolor sit amet consectetur
                    qui provident ea assumenda doloremque?
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.colorBorder}>
                        <div className={styles.btnRegister}>  Register Now</div>
                    </button>
                    <Link href={`${path}/#speakers`}> <button className={styles.btnSpeakers}>our speakers</button></Link>
                </div>

            </div>
        </header>
    )
}

export default EventPageHeader