import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import styles from './css/Cart.module.css'
import ProductInCart from './ProductInCart';
import ShoppingCartShop from './ShoppingCartShop'
import TotalInCart from './TotalInCart'

const Cart = () => {

    // const cardData = useSelector(state => state.bucketReducers)
    // console.log(cardData)
   
    const [data,setData] = useState([
        {
            h1: 'Shopping Cart',
            span: 'Shop'
        }
    ])
    // data.map((item)=>{
    //     console.log(item.h1)
    // })

    return (
        <div>
            {/* {
                data.map((item)=>{
                    <ShoppingCartShop 
                        h1 = {item.h1}
                        span = {item.span}
                    />
                })
            } */}
                <ShoppingCartShop/>
            <div className={styles.cart}>
                <ProductInCart/>
                <TotalInCart/>
            </div>
        </div>
    )
}

export default Cart;
