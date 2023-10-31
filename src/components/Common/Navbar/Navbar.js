import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/Common/Navbar/Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.navWrapper}>
                <Link href="/"> <div className={styles.imgStyle}>
                    <Image fill src="/MDC.png" alt="Mehsana Developers Club" />
                </div></Link>
                <div className={styles.menus}>
                    <input className={styles.checkBox} type="checkbox" name="menu" id="menu" />

                    <label htmlFor="menu" className={styles.mobMenu}>
                        <svg className={styles.threebar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                                fill='black' />
                        </svg>

                        <svg className={styles.crossIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            /></svg>
                    </label>
                    <ul className={styles.menulist}>
                        <Link href="/"> <li className={styles.menuitem}>Home</li></Link>
                        <Link href="/#team"><li className={styles.menuitem}>organizers</li></Link>
                        <Link href="/createbadge"><li className={styles.menuitem}>badges</li></Link>
                        <Link href="/events/devloop1.0"><li className={styles.menuitem}>Events</li></Link>
                        <Link href="/contact"><div className={styles.mobbtn}>Contact us</div></Link>

                    </ul>
                </div>
                <div className={styles.cover}> <Link href="/contact"><div className={styles.deskBtn}>Contact us</div></Link></div>
            </div>
        </nav >
    )
}

export default Navbar