import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import styles from './css/Cart.module.css'
import ProductInWishlist from './ProductInWishlist';
import ShoppingCartShop from './ShoppingCartShop'
import TotalInCart from './TotalInCart'

const Cart = () => {

    // const cardData = useSelector(state => state.bucketReducers)
    // console.log(cardData)
   
    const [data,setData] = useState([
        {
            h1: 'Wishlist',
            span: 'Shop'
        }
    ])

    return (
        <div>
            {
                data.map((item)=>{
                    <ShoppingCartShop 
                        h1 = {item.h1}
                        span = {item.span}
                    />
                })
            }
            <div className={styles.cart}>
                <ProductInWishlist/>
                {/* <TotalInCart/> */}
            </div>
        </div>
    )
}

export default Cart;
