import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/Homepage/HireDevlopers/HireDevloper.module.css'
function HireDevlopers() {
    return (
        <div className={styles.hireDevlopers}>
            <div className={styles.left}>
                <div className={styles.circle}></div>
                <div className={styles.colorText}>
                    <p className={styles.hire}>Hire devlopers</p>
                    from
                    <p className={styles.community}>our community</p>
                </div>
                <Link href="/contact"> <div className={styles.contactBtn}>Contact us</div></Link>
            </div>

            <div className={styles.right}>
                <div className={styles.imageStyle}>
                    <Image fill src="/devloper.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default HireDevlopers