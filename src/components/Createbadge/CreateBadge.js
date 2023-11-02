"use client"
import React from 'react'
import styles from '@/components/Createbadge/CreateBadge.module.css'
function CreateBadge() {
  return (
    <div className="section createBadge">
      <Paragraph />
      <BadgeView />
      <BadgeForm />
    </div>
  )
}

export default CreateBadge


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



const BadgeView = () => {
  return (
    <div className="badgeView">

    </div>
  )
}

const BadgeForm = () => {
  return (
    <div className={styles.badgeForm}>
      <p className={styles.secTitle}>Select a image</p>
      <label htmlFor='uploadImage' className={styles.uploadImageBtn}>Upload Image</label>
      <input className={styles.hideIt} type="file" accept=".png, .jpg, .jpeg" name="uploadImage" id="uploadImage" />
      <p className={styles.secTitle}>Choose badge shape </p>
      <div className={styles.shapeOptionContainer}>
        <input defaultCheckedselectShape type="radio" name="shape" id="original" className={styles.selectShape} />
        <label htmlFor='original' className={styles.originalOptionBtn}>original</label>
        <input type="radio" name="shape" id="square" className={styles.selectShape} />
        <label htmlFor='square' className={styles.squareOptionBtn}>Square</label>
        <input type="radio" name="shape" id="circle" className={styles.selectShape} />
        <label htmlFor='circle' className={styles.circleOptionBtn}>Circle</label>
      </div>
      <p className={styles.secTitle}>Choose a badge</p>
      <div className={styles.badgeOptionContainer}>
        <input type="radio" name="badgeOptions" id="badge1" className={styles.selectBadge} />
        <label htmlFor='badge1' className={styles.badgeOption}>
          <div className={styles.badgeImageContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.imageStyle} src="/defaultuser.jpg" alt="" />
            </div>
            <div className={styles.badgeContainer}>
              <img className={styles.imageStyle} src="/badgeopt1.png" alt="" />
            </div>
          </div>
        </label>
        <input type="radio" name="badgeOptions" id="badge2" className={styles.selectBadge} />
        <label htmlFor='badge2' className={styles.badgeOption}>
          <div className={styles.badgeImageContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.imageStyle} src="/defaultuser.jpg" alt="" />
            </div>
            <div className={styles.badgeContainer}>
              <img className={styles.imageStyle} src="/badgeopt2.png" alt="" />
            </div>
          </div>
        </label>
        
      </div>

      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem, sint! Officia, temporibus saepe. Perferendis ex obcaecati nam quae,
      </p>
    </div >
  )
}