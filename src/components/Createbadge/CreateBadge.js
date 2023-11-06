"use client"
import React, { useState } from 'react'
import BadgeForm from '@/components/Createbadge/BadgeForm/BadgeForm'
import Paragraph from '@/components/Createbadge/Paragraph/Paragraph'
import BadgeView from '@/components/Createbadge/BadgeView/BadgeView'
import styles from '@/components/Createbadge/CreateBadge.module.css'


function CreateBadge() {
  const [Photo, setPhoto] = useState({
    imgName: '',
    imgData: ''
  })
  const [Badge, setBadge] = useState('')
  return (
    <div className="section createBadge">
      <div className={styles.container}>
        <div className={styles.left}>
          <Paragraph />
          <BadgeForm Photo={Photo} setPhoto={setPhoto} setBadge={setBadge} />
        </div>
        <div className={styles.right}>
          <BadgeView Photo={Photo} Badge={Badge} />
        </div>
      </div>
    </div>
  )
}

export default CreateBadge






