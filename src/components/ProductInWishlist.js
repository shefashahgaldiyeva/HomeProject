import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import styles from './css/ProductInWishlist.module.css'
// import { GrClose } from 'react-icons/gr'
import { FaCartPlus } from 'react-icons/fa'


const ProductInWishlist = () =>{

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.wishlistReducers)
    const reducerData = useSelector(state => state.bucketReducers)

  
    cardData.map((item)=>{
        item.total = Number(item.price) * item.quantity
        console.log(item.total)
    })

    
    return (
        <div className={styles.table}>
            <table>
                <thead id='table'>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                {
                    cardData.map((item)=>(
                        <tr key={item.id}>
                            <td>
                                <div>
                                    <img src={item.img}/>
                                    <h3>{item.h3}</h3>
                                </div>
                            </td>
                            <td><span className={styles.price}>${item.price}</span></td>
                            <td><p>In stock</p></td>
                            <td><Link to='/cart'><button className={styles.btn} onClick={()=>dispatch({
                                type: 'ELAVE_ET',
                                payload: item
                            })}><FaCartPlus/>ADD TO CART</button></Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductInWishlist;
