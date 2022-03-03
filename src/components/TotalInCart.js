import React from 'react'
import { useSelector } from 'react-redux'
import styles from './css/TotalInCart.module.css'
import { HiOutlineRefresh } from 'react-icons/hi'

const TotalInCart = () =>{

    const cardData = useSelector(state => state.bucketReducers)
    
        let subTotal = 0;
        cardData.map(item=>{
            subTotal += item.total
        })
        // console.log(subTotal)

    let total = 0;
    const shippingClick = () =>{
        let val = document.querySelector('input[name="shipping"]:checked').value;
        // console.log(val)
        let total = subTotal + Number(val);
        console.log(total)
        return total
    }

    return (
        <div className={styles.total}>
            <div className={styles.subTotal}>
                <h3>Cart Total</h3>
                <div className={styles.sum}>
                    <span>Subtotal:</span>
                    <span>${subTotal}.00</span>
                </div>
                <form>
                    <p>Shipping:</p>
                    <div className={styles.shipping}>
                        <label for='free'>
                            <input checked onClick={()=>shippingClick()} id='free' name='shipping' value={0} type='radio'/>
                            Free Shipping
                        </label>
                        <span>$0.00</span>
                    </div>
                    <div className={styles.shipping}>
                        <label for='standart'>
                            <input onClick={()=>shippingClick()} id='standart' name='shipping' value={10} type='radio'/>
                            Standard: 
                        </label>
                        <span>$10.00</span>
                    </div>
                    <div className={styles.shipping}>
                        <label for='express'>
                            <input onClick={()=>shippingClick()} id='express' name='shipping' value={20} type='radio'/>
                            Express:
                        </label>
                        <span>$20.00</span>
                    </div>
                </form>
                <div className={styles.adres}>
                    <h2>Estimate for Your Country</h2>
                    <a href='#'>Change address</a>
                </div>
                <div className={styles.totalSpan}>
                    <span>Total:</span>
                    <span>${subTotal}.00</span>
                </div>
                <a className={styles.btn} href='#'>PROCEED TO CHECKOUT</a>
            </div>
            <div>
            <a className={styles.continue} href='#'>
                CONTINUE SHOPPING
                <HiOutlineRefresh/>
            </a>
            </div>
        </div>
    )
}

export default TotalInCart;
