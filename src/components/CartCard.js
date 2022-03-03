import React, { useEffect } from 'react'
import  styles from './css/ShoppingCard.module.css'
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'

const CartCard = (props) => {

    // const selector = useSelector(state => state.bucketReducers)
    // const dispatch = useDispatch(selector)
   	// console.log(selector)
    // useEffect(()={
    //     dispatch({
    //         type: 'ELAVE_ET',
    //         payload: item 
    //     })
    // },[])
    // selector.map((item)=>(
    //     console.log(item)
    //     ))
   


    return (
		<div>
			{/* { */}
				{/* // selector.map((item)=>( */}
					<div className={styles.shoppingCardWrapper}>
					<div className={styles.ShoppingCard}>
						<div className={styles.image}>  
							<div className={styles.view}>
								<a href='#'><span>add to wishlist</span><FiHeart/></a>
								<a href='#' title='quick view'><FaRegEye/></a>
							</div>
							<img src={props.img} onMouseOver={(a)=>{a.target.src = props.img2}} onMouseOut={(a)=>{a.target.src = props.img}}/>
						</div>
						<div className={styles.bottom}>
							<div className={styles.category}><a href='#'>{props.category}</a></div>
							<h3><a href='#'>{props.h3}</a></h3>
							<span className={styles.price}>{props.price}</span>
							<div>
								{/* <div className={styles.stars}>stars</div> */}
								<span className={styles.review}>({props.review}review)</span>
							</div>
							<div className={styles.btn}>
								<a href='#'><span>{props.btnIcon}</span>{props.btn}</a>
							</div>
						</div>
					</div>
				</div>
				{/* )) */}
			{/* } */}
		</div>

    )
}
export default CartCard;