'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@/components/EventsPage/Speakers/Speaker.module.css'
function Speakers() {
    const [Speakers, setSpeakers] = useState([
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
        {
            name: "Arpan Das",
            designation: "Senior Blockchain Devloper",
            company: "Amazon Web Services",
            image: "/codingarpan.png",
            twitter: "https://twitter.com/codingarpan",
            linkedin: "https://www.linkedin.com/in/codingarpan/",
        },
    ])
    return (
        <div id="speakers" className="section aboutsection">
            <p className={`title`}>our speakers</p>
            <p className={styles.tagline}>See Who is Coming</p>
            <div className={styles.speakerContainer}>

                {
                    Speakers.map((speaker, index) => {
                        return <div key={`${index}`} className={styles.speakerCard}>
                            <div className={styles.tubeline}></div>
                            <div className={styles.speaker}>
                                <div className={styles.speakerImage}>
                                    <img className={styles.imgStyle} src={`${speaker.image}`} alt={`${speaker.name}`} />
                                </div>
                                <div className={styles.speakerDetails}>
                                    <p className={styles.speakerName}>{`${speaker.name}`}</p>
                                    <p className={styles.speakerDesignation}>{`${speaker.designation}`}</p>
                                    <p className={styles.speakerCompany}>{`${speaker.company}`}</p>
                                    <div className={styles.socialConatiner}>
                                        <Link href={`${speaker.linkedin}`}> <div className={styles.link}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.linkedin}
                                                viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill='#72A8FF' /></svg>
                                        </div></Link>
                                        <Link href={`${speaker.twitter}`}> <div className={styles.twit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.twitter}
                                                viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" fill='#72A8FF' /></svg>
                                        </div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Speakers