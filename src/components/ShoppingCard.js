import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import  styles from './css/ShoppingCard.module.css'
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'

const ShoppingCard = (props) => {

    const selectorAll = useSelector(state => state.allDataReducer)
    // console.log(selectorAll)
    // selectorAll.map((item)=>{
    //         console.log(item.id)
    // })
    // const selectorFurniture = useSelector(state => state.bucketReducers)

    // const [category,seCategory]=useState([
    //     selectorAll,
    //     selectorFurniture
    // ])

    const dispatch = useDispatch();
    // useEffect(()=>{},[])
    // const handleAdd = (e) => {
        // selector.map((item)=>(
        //     console.log(item.price)
        // ))
        // dispatch({
        //     type: 'ELAVE_ET',
        //     payload: item 
        // })
        // console.log(e)
    // }
    
    const bucket = useSelector(state => state.bucketReducers)
    const handleAdd = (item) =>{
        const addedItem = bucket.filter(index => index.id == item.id)
        if(addedItem.length !== 0){
            addedItem[0].quantity += 1
        }else{
            dispatch({
                type: 'ELAVE_ET',
                payload: item 
            })
        }
        
    }
    const handleAddWishlist = (item) =>{
        dispatch({
            type: 'SEVIMLIYE_ELAVE_ET',
            payload: item 
        })
    }


    return (
        <div className={styles.shoppingCardWrapper}>
            {/* {
                selectorAll.map((item)=>{ */}
                    <div className={styles.ShoppingCard}>
                    <div className={styles.image}>
                        <div className={styles.view}>
                            <a href='#' onClick={() => handleAddWishlist(props.item)}><span>add to wishlist</span><FiHeart/></a>
                            <Link to={`/${props.item.id}`} title='quick view'><FaRegEye/></Link>
                        </div>
                        <Link to={`/${props.item.id}`}><img src={props.item.img} onMouseOver={(a)=>{a.target.src = props.item.img2}} onMouseOut={(a)=>{a.target.src = props.item.img}}/></Link>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.category}><a href='#'>{props.item.category}</a></div>
                        <h3><a href='#'>{props.item.h3}</a></h3>
                        <span className={styles.price}>{props.item.price}</span>
                        <div>
                            {/* <div className={styles.stars}>stars</div> */}
                            <span className={styles.review}>({props.item.review}review)</span>
                        </div>
                        <div className={styles.btn}>
                            <a href='#' onClick={() => handleAdd(props.item)}><span>{props.item.btnIcon}</span>{props.item.btn}</a>
                        </div>
                    </div>
            </div>
                {/* })
            } */}
            
        </div>

    )
}
export default ShoppingCard;