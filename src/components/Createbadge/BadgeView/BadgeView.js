import React from 'react'
import html2canvas from 'html2canvas'
import styles from '@/components/Createbadge/BadgeView/BadgeView.module.css'
const BadgeView = ({ Photo, Badge }) => {
    const downloadImage = () => {
      const cvs = document.querySelector('#downloadBadge');
      if (Photo.imgName != '' && Badge != '') {
        html2canvas(cvs).then(function (canvas) {
          // document.body.appendChild(canvas);
          const downloadLink = document.createElement('a');
          downloadLink.href = canvas.toDataURL('image/jpg');
          downloadLink.download = `MDCDevloop3-0.png`;
          downloadLink.click();
        }).catch((err) => {
          console.log(err)
        });
      }
    }
  
  
    return (
      <div className={styles.badgeViewContainer}>
        <p className={styles.cropViewTitle}>your badge </p>
        {Photo.imgName ? (<div id="downloadBadge" className={styles.cropViewContainer}>
          <div className={styles.uploadedImageContainer}>
            <img id="uploadedImage" className={styles.uploadImageViewStyle} src={Photo.imgData} alt="Upload Your Photo" />
          </div>
          <div className={styles.realBadgeContainer}>
            <img id="selectedBadge" className={styles.uploadBadgeViewStyle} src={Badge} alt="Choose Your Badge" />
          </div>
        </div>) : (<div className={styles.demoView}>
          <p className={styles.yourImage}>Upload Your Image</p>
          <p className={styles.yourBadge}>Choose your Badge</p>
        </div>)}
  
        <button onClick={() => downloadImage()} className={styles.badgeDownloadBtn}>Download my badge</button>
      </div>
    )
  }

export default BadgeView