import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/Common/Footer/Footer.module.css'
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.linkContainer}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <div className={styles.imageStyle}>
                            <Image fill src="/MDC_Dark.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.tagline}>A community for tech enthusiast and a home for open-source contribution.</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.quickLinks}>
                        <p className={styles.secTitle}>quick Links</p>
                        <Link href="/#team"> <p className={styles.links}>Organizers</p></Link>
                        <Link href="/contact"> <p className={styles.links}>Contact us</p></Link>
                        <Link href="/createbadge"> <p className={styles.links}>Badges</p></Link>
                        <Link href="/contact">  <p className={styles.links}>Hire Devloper</p></Link>
                    </div>
                    <div className={styles.followSocials}>
                        <p className={styles.secTitle}>Follow Us</p>
                        <Link href="https://www.facebook.com/MehDevClub/"> <div className={styles.socialLink}>
                            <span className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.socialIcons} viewBox="0 0 512 512">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                        fill='#b3b2b2' />
                                </svg>
                            </span>
                            <span className={styles.links}>facebook</span>
                        </div></Link>
                        <Link href="https://www.instagram.com/Meh_Devs_Club/"> <div className={styles.socialLink}>
                            <span className={styles.icon}>
                                <svg viewBox="0 0 35 35" className={styles.socialIcons} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.299 0.00215308C20.576 -0.00274706 21.853 0.010087 23.1296 0.0406512L23.4691 0.0529006C23.861 0.0668998 24.2478 0.0843989 24.715 0.105398C26.5769 0.192893 27.8473 0.486879 28.962 0.919106C30.117 1.36358 31.0899 1.96555 32.0629 2.9385C32.9525 3.81277 33.641 4.87031 34.0805 6.03759C34.5127 7.15229 34.8067 8.42447 34.8942 10.2864C34.9152 10.7519 34.9327 11.1403 34.9467 11.5323L34.9572 11.8718C34.9883 13.1478 35.0017 14.4242 34.9975 15.7006L34.9992 17.006V19.2984C35.0035 20.5754 34.9901 21.8524 34.959 23.129L34.9485 23.4685C34.9345 23.8604 34.917 24.2472 34.896 24.7144C34.8085 26.5763 34.511 27.8467 34.0805 28.9614C33.6424 30.1299 32.9537 31.1883 32.0629 32.0623C31.1878 32.9518 30.1298 33.6402 28.962 34.0799C27.8473 34.5121 26.5769 34.8061 24.715 34.8936C24.2478 34.9146 23.861 34.9321 23.4691 34.9461L23.1296 34.9566C21.853 34.9877 20.576 35.0011 19.299 34.9969L17.9936 34.9986H15.703C14.426 35.0029 13.149 34.9895 11.8724 34.9584L11.5329 34.9479C11.1175 34.9328 10.7022 34.9153 10.287 34.8954C8.42508 34.8079 7.15464 34.5104 6.0382 34.0799C4.87046 33.6413 3.81273 32.9527 2.93911 32.0623C2.04848 31.1878 1.35933 30.1296 0.919713 28.9614C0.487485 27.8467 0.1935 26.5763 0.106004 24.7144C0.0865153 24.2992 0.0690161 23.8838 0.053507 23.4685L0.0447576 23.129C0.0124956 21.8524 -0.0020886 20.5754 0.0010097 19.2984V15.7006C-0.00387424 14.4242 0.0089598 13.1478 0.0395079 11.8718L0.0517572 11.5323C0.0657565 11.1403 0.0832555 10.7519 0.104254 10.2864C0.19175 8.42272 0.485735 7.15404 0.917962 6.03759C1.35784 4.86974 2.04834 3.81249 2.94086 2.94025C3.81388 2.04911 4.87094 1.35934 6.0382 0.919106C7.15464 0.486879 8.42333 0.192893 10.287 0.105398L11.5329 0.0529006L11.8724 0.0441512C13.1484 0.0119053 14.4248 -0.00267885 15.7012 0.000403298L19.299 0.00215308ZM17.5001 8.7517C16.3408 8.73531 15.1898 8.94949 14.114 9.38179C13.0382 9.81409 12.059 10.4559 11.2334 11.2699C10.4078 12.0839 9.75221 13.0539 9.30474 14.1235C8.85726 15.1931 8.62683 16.341 8.62683 17.5004C8.62683 18.6598 8.85726 19.8077 9.30474 20.8772C9.75221 21.9468 10.4078 22.9168 11.2334 23.7308C12.059 24.5449 13.0382 25.1867 14.114 25.619C15.1898 26.0513 16.3408 26.2655 17.5001 26.2491C19.8206 26.2491 22.0461 25.3272 23.687 23.6864C25.3278 22.0455 26.2497 19.82 26.2497 17.4995C26.2497 15.179 25.3278 12.9535 23.687 11.3126C22.0461 9.67178 19.8206 8.7517 17.5001 8.7517ZM17.5001 12.2515C18.1975 12.2387 18.8904 12.3649 19.5384 12.6229C20.1864 12.8808 20.7765 13.2653 21.2743 13.7539C21.772 14.2425 22.1674 14.8253 22.4374 15.4685C22.7073 16.1116 22.8464 16.802 22.8466 17.4995C22.8467 18.197 22.7078 18.8875 22.4381 19.5307C22.1683 20.1739 21.7731 20.7569 21.2755 21.2456C20.7779 21.7343 20.188 22.119 19.54 22.3772C18.8921 22.6354 18.1992 22.7619 17.5019 22.7492C16.1095 22.7492 14.7743 22.1961 13.7897 21.2116C12.8052 20.2271 12.2521 18.8918 12.2521 17.4995C12.2521 16.1072 12.8052 14.7719 13.7897 13.7874C14.7743 12.8029 16.1095 12.2498 17.5019 12.2498L17.5001 12.2515ZM26.6871 6.12684C26.1226 6.14943 25.5887 6.38959 25.1973 6.797C24.8058 7.20442 24.5872 7.74749 24.5872 8.31248C24.5872 8.87746 24.8058 9.42053 25.1973 9.82795C25.5887 10.2354 26.1226 10.4755 26.6871 10.4981C27.2673 10.4981 27.8236 10.2677 28.2339 9.85744C28.6441 9.44723 28.8745 8.89086 28.8745 8.31073C28.8745 7.7306 28.6441 7.17423 28.2339 6.76401C27.8236 6.3538 27.2673 6.12334 26.6871 6.12334V6.12684Z" fill="#b3b2b2" />
                                </svg>
                            </span>
                            <span className={styles.links}>instagram</span>
                        </div></Link>
                        <Link href="https://www.linkedin.com/company/mehdevclub/">  <div className={styles.socialLink}>
                            <span className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.socialIcons} viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                        fill='#b3b2b2' />
                                </svg>
                            </span>
                            <span className={styles.links}>linkedin</span>
                        </div></Link>
                        <Link href="https://twitter.com/MehDevClub/"> <div className={styles.socialLink}>
                            <span className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.socialIcons} viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        fill='#b3b2b2' />
                                </svg>
                            </span>
                            <span className={styles.links}>twitter</span>
                        </div></Link>
                    </div>
                </div>
            </div>
            <div className={styles.legalConatiner}>
                <p className={styles.rights}>2023 All Rights Reserved</p>
                <div className={styles.optionContainer}>
                    <p className={styles.options}>privacy policy</p>
                    <p className={styles.options}>code of conduct</p>
                    <p className={styles.options}>sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer