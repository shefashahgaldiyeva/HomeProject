import React,{useEffect, useState} from 'react'
import styles from './css/Payment.module.css'
import {IoRocketOutline} from 'react-icons/io5'
import {GrRotateLeft} from 'react-icons/gr'
import {FaRegLifeRing} from 'react-icons/fa'

const Payment = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1800);
        });
    }, []);
    // console.log(window.scrollY)

    return (
        <div className={styles.payment}>
            <div className={styles.paymentInner}>
                <div className={scroll ? styles.mainScrolledLeft : styles.main}>
                    <span><IoRocketOutline/></span>
                    <h3>Payment & Delivery</h3>
                    <p>Free shipping for orders over $50</p>
                </div>
                <div>
                    <span><GrRotateLeft/></span>
                    <h3>Return & Refund</h3>
                    <p>Free 100% money back guarantee</p>
                </div>
                <div className={scroll ? styles.mainScrolledRight : styles.main}>
                    <span><FaRegLifeRing/></span>
                    <h3>Quality Support</h3>
                    <p>Alway online feedback 24/7</p>
                </div>
            </div>
        </div>
    )
}

export default Payment;
