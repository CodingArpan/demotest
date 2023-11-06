'use client'
import React from 'react'
import styles from '@/components/Createbadge/Paragraph/Paragraph.module.css'
const Paragraph = () => {
    return (
        <div className={styles.paraContainer}>
            <p className={styles.badgeTitle}>
                Win a Devloop Badge
            </p>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ab at exercitationem voluptatibus officia repellendus cum
                animi unde dolorem, amet consectetur quidem aspernatur voluptate,
                magnam deserunt totam nobis voluptatem hic consequatur.
            </p>
        </div>
    )
}

export default Paragraph