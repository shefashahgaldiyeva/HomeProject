import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io';
import { BiPhone} from 'react-icons/bi';
import { FiHeart} from 'react-icons/fi';
import { AiOutlineUser} from 'react-icons/ai';
import styles from './css/TopHeader.module.css'
import { HiSelector } from 'react-icons/hi';

const TopHeader = () => {

    const selector = useSelector(state => state.wishlistReducers)
    // console.log(selector)
    return (
        <div className={styles.topHeader}>
            <div className={styles.topHeaderInner}>
                <div className={styles.left}>
                    <span className={styles.spanNo1}>
                        <a href="#">USD<IoIosArrowDown/></a>
                        <ul className={styles.ulNo1}>
                            <li><a href="#">Eur</a></li>
                            <li><a href="#">Usd</a></li>
                        </ul>
                    </span>
                    <span className={styles.spanNo2}>
                        <a href="#">ENG<IoIosArrowDown/></a>
                        <ul className={styles.ulNo2}>
                            <li><a href="#">English</a></li>
                            <li><a href="#">Spanish</a></li>
                            <li><a href="#">French</a></li>
                        </ul>
                    </span>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li><a href="tel:#"><BiPhone/><span>Call: +0123 456 789</span></a></li>
                        <li><Link to='/Wishlist'><FiHeart/><span>My wishlist ({selector.length})</span></Link></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#"><AiOutlineUser/><span>Login</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TopHeader;