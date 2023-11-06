import React from 'react'
import styles from '@/components/Createbadge/BadgeForm/BadgeForm.module.css'
const BadgeForm = ({ Photo, setPhoto, setBadge }) => {

    const badgeOptions = [
        { key: 'badge1', value: '/badgeopt1.png' },
        { key: 'badge2', value: '/badgeopt2.png' }
    ]

    function printFile(file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
            setPhoto((Photo) => {
                return { ...Photo, imgData: evt.target.result }
            });
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }

    const getPhotoDetails = (e) => {
        console.log(e.target.files[0]);
        const details = {
            name: e.target.files[0].name,
            size: e.target.files[0].size,
        }
        printFile(e.target.files[0]);
        setPhoto((Photo) => {
            return { ...Photo, imgName: details.name }
        });

    }

    return (
        <div className={styles.badgeForm}>
            <p className={styles.secTitle}>Select a image</p>
            <label htmlFor='uploadImage' className={styles.uploadImageBtn}>
                <div className={styles.btnIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                            fill='white' /></svg>
                </div>
                <div className={styles.btnName}>Upload Image</div>
            </label>
            {Photo.imgName && <p className={styles.imgName}>{Photo.imgName}</p>}
            <input onChange={(e) => getPhotoDetails(e)} className={styles.hideIt} type="file" accept=".png, .jpg, .jpeg" name="uploadImage" id="uploadImage" />
            {/* <p className={styles.secTitle}>Choose badge shape </p>
        <div className={styles.shapeOptionContainer}>
          <input defaultChecked type="radio" name="shape" id="original" className={styles.selectShape} />
          <label htmlFor='original' className={styles.originalOptionBtn}>original</label>
          <input type="radio" name="shape" id="square" className={styles.selectShape} />
          <label htmlFor='square' className={styles.squareOptionBtn}>Square</label>
          <input type="radio" name="shape" id="circle" className={styles.selectShape} />
          <label htmlFor='circle' className={styles.circleOptionBtn}>Circle</label>
        </div> */}
            <p className={styles.secTitle}>Choose a badge</p>
            <div className={styles.allBadgeOptionsContainer}>
                {
                    badgeOptions.map(({ key, value }) => {
                        return <div key={key} className={styles.badgeOptionContainer}>
                            <input onChange={() => {
                                setBadge(value)
                            }} type="radio" name="badgeOptions" id={key} className={styles.selectBadge} />
                            <label htmlFor={key} className={styles.badgeOption}>
                                <div className={styles.badgeImageContainer}>
                                    <div className={styles.imageContainer}>
                                        <img className={styles.userImageStyle} src="/defaultuser.jpg" alt="" />
                                    </div>
                                    <div className={styles.badgeContainer}>
                                        <img className={styles.userImageStyle} src={value} alt="" />
                                    </div>
                                </div>
                            </label>
                        </div>
                    })
                }
                {/* <div className={styles.badgeOptionContainer}>
            <input type="radio" name="badgeOptions" id="badge1" className={styles.selectBadge} />
            <label htmlFor='badge1' className={styles.badgeOption}>
              <div className={styles.badgeImageContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.userImageStyle} src="/defaultuser.jpg" alt="" />
                </div>
                <div className={styles.badgeContainer}>
                  <img className={styles.userImageStyle} src="/badgeopt1.png" alt="" />
                </div>
              </div>
            </label>
          </div>
  
          <div className={styles.badgeOptionContainer}>
            <input onChange={() => {
              setBadge("/badgeopt2.png")
            }} type="radio" name="badgeOptions" id="badge2" className={styles.selectBadge} />
            <label htmlFor='badge2' className={styles.badgeOption}>
              <div className={styles.badgeImageContainer}>
                <div className={styles.imageContainer}>
                  <img className={styles.userImageStyle} src="/defaultuser.jpg" alt="" />
                </div>
                <div className={styles.badgeContainer}>
                  <img className={styles.userImageStyle} src="/badgeopt2.png" alt="" />
                </div>
              </div>
            </label>
          </div> */}



            </div>

            {/* <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, sint! Officia, temporibus saepe. Perferendis ex obcaecati nam quae,
        </p> */}
        </div >
    )
}

export default BadgeForm