import React from 'react'
import styles from './css/ShopByCategoriesCol.module.css'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const ShopByCategoriesCol = (props) => {
    return (
        <div className={styles.bg} style={{backgroundImage:`url(${props.img})`}}>
            <div className={styles.link}>
                <Link to='/Shop'>
                    <h3>{props.btn}</h3>
                    <span className={styles.span}>Shop Now <BsArrowRight/></span>
                </Link>
            </div>
        </div>
    )
}
export default ShopByCategoriesCol;