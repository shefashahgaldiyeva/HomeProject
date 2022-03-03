import React from 'react'
import styles from './css/Footer.module.css'
import payments from '../img/payments.png'
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerInner}>
                <div>
                    <h3>About Olia</h3>
                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                    <div className={styles.icons}>
                        <a href='#'><GrFacebookOption/></a>
                        <a href='#'><AiOutlineTwitter/></a>
                        <a href='#'><AiOutlineInstagram/></a>
                        <a href='#'><AiOutlineYoutube/></a>
                    </div>
                </div>
                <div>
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href='#'>About Olia</a></li>
                        <li><a href='#'>How to shop on Olia</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Contact us</a></li>
                        <li><a href='#'>Log in</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href='#'>Payment Methods</a></li>
                        <li><a href='#'>Money-back guarantee!</a></li>
                        <li><a href='#'>Returns</a></li>
                        <li><a href='#'>Shipping</a></li>
                        <li><a href='#'>Terms and conditions</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3>My Account</h3>
                    <ul>
                        <li><a href='#'>Sign In</a></li>
                        <li><a href='#'>View Cart</a></li>
                        <li><a href='#'>My Wishlist</a></li>
                        <li><a href='#'>Track My Order</a></li>
                        <li><a href='#'>Help</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerBottom}>
               <div>
                    <p>Copyright © 2021 Olia Store. All Rights Reserved.</p>
                    <img src={payments}/>
               </div>
            </div>
        </div>
    )
}

export default Footer;
