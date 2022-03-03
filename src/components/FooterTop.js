import React from 'react'
import styles from './css/FooterTop.module.css'
import bg from '../img/footer_bg.jpg'

const FooterTop = () => {
    return (
        <div className={styles.footerTop} style={{backgroundImage: `url(${bg})`}}>
            <div className={styles.form}>
                <input placeholder='Enter your Email Address' type='email'/>
                <button type='submit' title='Sing up'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default FooterTop;
