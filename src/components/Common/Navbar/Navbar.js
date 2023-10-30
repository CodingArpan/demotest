import React from 'react'
import styles from '@/components/Common/Navbar/Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.navWrapper}>
                <div className={styles.logo}>
                    <img className={styles.imgStyle} src="/MDC.png" alt="" />
                </div>
                <div className={styles.menus}>
                    <label htmlFor="menu" className={styles.mobMenu}>
                        <svg className={styles.threebar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                                fill='black' />
                        </svg>
                    </label>
                    <input className={styles.checkBox} type="checkbox" name="menu" id="menu" />
                    <ul className={styles.menulist}>
                        <li className={styles.menuitem}>Home</li>
                        <li className={styles.menuitem}>Team</li>
                        <li className={styles.menuitem}>badges</li>
                        <li className={styles.menuitem}>Events</li>
                        <div className={styles.mobbtn}>Contact us</div>

                    </ul>
                </div>
                <div className={styles.deskBtn}>Contact us</div>
            </div>
        </nav >
    )
}

export default Navbar