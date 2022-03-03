import React from 'react'
import styles from './css/ShoppingCartShop.module.css'
import cart_bg from '../img/cart_page_bg.jpg'

const WishlistCartShop = (props) => {
    return (
        <div className={styles.bg} style={{backgroundImage: `url(${cart_bg})`}}>
            {/* <h1>{props.h1}</h1>
            <span>{props.span}</span> */}
            <h1>Wishlist</h1>
            <span>Shop</span>
        </div>
    )
}

export default WishlistCartShop;
