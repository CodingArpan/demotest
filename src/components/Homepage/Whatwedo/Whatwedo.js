import React from 'react'
import styles from '@/components/Homepage/Whatwedo/Whatwedo.module.css'
function Whatwedo() {
    return (
        <div className="section whatwedo">
            <p className={`title`}>What we do for community</p>
            <div className={styles.actionContainer}>
                <div className={styles.actions}>
                    <div className={styles.codeCircle}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            className={styles.codeIcon}>
                            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                                fill="#FF696E" />
                        </svg>
                    </div>
                    <div className={styles.actionname}>hackathon</div>
                    <span className={styles.codeUnderline}></span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. aliquam a hic veritatis vero placeat minima explicabo?</p>
                </div>
                <div className={styles.barrier}></div>
                <div className={styles.actions}>
                    <div className={styles.meetCircle}>
                        <svg className={styles.meetIcon}
                            viewBox="0 0 30 28"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.82818 8.37773C9.91936 8.37773 10.9658 7.94694 11.7374 7.18012C12.509 6.41331 12.9425 5.37328 12.9425 4.28884C12.9425 3.2044 12.509 2.16437 11.7374 1.39756C10.9658 0.630743 9.91936 0.199951 8.82818 0.199951C7.737 0.199951 6.69052 0.630743 5.91894 1.39756C5.14736 2.16437 4.7139 3.2044 4.7139 4.28884C4.7139 5.37328 5.14736 6.41331 5.91894 7.18012C6.69052 7.94694 7.737 8.37773 8.82818 8.37773ZM0.599609 12.9777C0.599609 12.3 0.870527 11.6499 1.35276 11.1707C1.835 10.6914 2.48905 10.4222 3.17104 10.4222H9.72818C9.4725 11.0738 9.34168 11.7672 9.34247 12.4666C9.34247 14.368 10.2918 16.0495 11.7462 17.0666H9.34247C8.5903 17.0665 7.8525 17.2713 7.20927 17.6588C6.56604 18.0463 6.042 18.6016 5.69412 19.2644C3.72338 18.7604 2.46235 17.7801 1.68372 16.668C0.599609 15.1193 0.599609 13.5154 0.599609 13.2333V12.9777ZM24.3051 19.2644C26.2758 18.7604 27.5369 17.7801 28.3155 16.668C29.3996 15.1193 29.3996 13.5144 29.3996 13.2333V12.9777C29.3996 12.3 29.1287 11.6499 28.6465 11.1707C28.1642 10.6914 27.5102 10.4222 26.8282 10.4222H20.271C20.52 11.056 20.6568 11.7449 20.6568 12.4666C20.6568 14.368 19.7074 16.0495 18.253 17.0666H20.6568C21.4089 17.0665 22.1467 17.2713 22.79 17.6588C23.4332 18.0463 23.9572 18.6016 24.3051 19.2644ZM25.2853 4.28884C25.2853 5.37328 24.8519 6.41331 24.0803 7.18012C23.3087 7.94694 22.2622 8.37773 21.171 8.37773C20.0799 8.37773 19.0334 7.94694 18.2618 7.18012C17.4902 6.41331 17.0568 5.37328 17.0568 4.28884C17.0568 3.2044 17.4902 2.16437 18.2618 1.39756C19.0334 0.630743 20.0799 0.199951 21.171 0.199951C22.2622 0.199951 23.3087 0.630743 24.0803 1.39756C24.8519 2.16437 25.2853 3.2044 25.2853 4.28884ZM6.77104 21.1555C6.77104 20.4777 7.04196 19.8277 7.52419 19.3485C8.00643 18.8692 8.66048 18.6 9.34247 18.6H20.6568C20.9944 18.6 21.3288 18.6661 21.6408 18.7945C21.9528 18.9229 22.2362 19.1112 22.475 19.3485C22.7138 19.5858 22.9032 19.8675 23.0324 20.1775C23.1617 20.4876 23.2282 20.8199 23.2282 21.1555V21.4111C23.2282 21.6922 23.2282 23.2971 22.1441 24.8457C21.0126 26.4619 18.8629 27.8 14.9996 27.8C11.1373 27.8 8.98658 26.4619 7.85515 24.8457C6.77104 23.2971 6.77104 21.6932 6.77104 21.4111V21.1555ZM14.9996 16.5555C16.0908 16.5555 17.1373 16.1247 17.9088 15.3579C18.6804 14.5911 19.1139 13.5511 19.1139 12.4666C19.1139 11.3822 18.6804 10.3422 17.9088 9.57534C17.1373 8.80852 16.0908 8.37773 14.9996 8.37773C13.9084 8.37773 12.8619 8.80852 12.0904 9.57534C11.3188 10.3422 10.8853 11.3822 10.8853 12.4666C10.8853 13.5511 11.3188 14.5911 12.0904 15.3579C12.8619 16.1247 13.9084 16.5555 14.9996 16.5555Z" fill="#5A96F8" />
                        </svg>

                    </div>
                    <div className={styles.actionname}>meetups</div>
                    <span className={styles.meetUnderline}></span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. aliquam a hic veritatis vero placeat minima explicabo?</p>
                </div>
                <div className={styles.barrier}></div>

                <div className={styles.actions}>
                    <div className={styles.eventCircle}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className={styles.eventIcon}>
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
                                fill='#FBCA35'
                            />
                        </svg>
                    </div>
                    <div className={styles.actionname}>Events</div>
                    <span className={styles.eventUnderline}></span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. aliquam a hic veritatis vero placeat minima explicabo?</p>
                </div>

            </div>
        </div>
    )
}

export default Whatwedo