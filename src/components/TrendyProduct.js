import React, { useState } from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import SwiperCore, {Pagination} from 'swiper';
import {Swiper , SwiperSlide} from 'swiper/react';
import { useSelector,useDispatch } from 'react-redux';
// import "swiper/css/pagination"
// import Swiper from 'swiper'

import './css/TrendyProduct.css'
import {BsListCheck} from 'react-icons/bs'
import {FaCartArrowDown} from 'react-icons/fa'
import {RiErrorWarningFill}  from 'react-icons/ri'
import ShoppingCard from './ShoppingCard';
import CartCard from './CartCard'

import card_1 from '../img/product-1.jpg'
import card_1H from '../img/product-1H.jpg'
import card_2 from '../img/product-2.jpg'
import card_2H from '../img/product-2H.jpg'
import card_3 from '../img/product-3.jpg'
import card_3H from '../img/product-3H.jpg'
import card_4 from '../img/product-4.jpg'
import card_4H from '../img/product-4H.jpg'
import card_5 from '../img/product-5.jpg'
import card_5H from '../img/product-5H.jpg'
import card_6 from '../img/product-6.jpg'
import card_6H from '../img/product-6H.jpg'
import card_7 from '../img/product-7.jpg'
import card_7H from '../img/product-7H.jpg'
import card_8 from '../img/product-8.jpg'
import card_8H from '../img/product-8H.jpg'
import card_9 from '../img/product-9.jpg'
import card_9H from '../img/product-9H.jpg'
import card_10 from '../img/product-10.jpg'
import card_10H from '../img/product-10H.jpg'
import card_11 from '../img/product-11.jpg'
import card_11H from '../img/product-11H.jpg'
import card_12 from '../img/product-12.jpg'
import card_12H from '../img/product-12H.jpg'
import card_13 from '../img/product-13.jpg'
import card_13H from '../img/product-13H.jpg'

export default function TrendyProduct() {
    
    // SwiperCore.use([Pagination]);

    // const dispatch = useDispatch();
    
    // const handleAdd = (item) =>{
    //     dispatch({
    //         type: 'ELAVE_ET',
    //         payload: item 
    //     })
    // }
    
    const shoppingCardAll = useSelector(state => state.shoppingCardAllReducer)
    const shoppingCardFurniture = useSelector(state => state.shoppingCardFurnitureReducer)
    const shoppingCardDecoration = useSelector(state => state.shoppingCardDecorationReducer)
    const shoppingCardLighting = useSelector(state => state.shoppingCardLightingReducer)
   
    return (
    <div>
        <div className='TrendyProduct'>
            <h2>Trendy Products</h2>
            <div className='TrendyCategory'>
                <span><Link to='/'>All</Link></span>
                <span><Link to='/Furniture'>Furniture</Link></span>
                <span><Link to='/Decoration'>Decoration</Link></span>
                <span><Link to='/Lighting'>Lighting</Link></span>
            </div>
        </div>
         <Switch>
            <Route exact path='/'>
                <div className="lunchbox-wrapper">
                    <div className="lunchbox">

                    <div id="swiper1" className="swiper-container"> 

                        <div className="swiper-wrapper">

                            <div className="swiper-slide swiper-slide-big">
                            <Swiper grabCursor={true} pagination={{"dynamicBullets": true},{ el: '.swiper-pagination'},{clickable: true}} >
                                {
                                    shoppingCardAll.map((item)=>(
                                        <SwiperSlide>
                                            <ShoppingCard item={item}/>
                                        </SwiperSlide>        
                                    ))}
                            </Swiper>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div> 
                    </div>
                </div>
            </Route>
            <Route path='/Furniture'> 
                <div className="lunchbox-wrapper">
                    <div className="lunchbox">

                    <div id="swiper1" className="swiper-container"> 

                        <div className="swiper-wrapper">

                            <div className="swiper-slide swiper-slide-big">
                            <Swiper grabCursor={true} pagination={{"dynamicBullets": true},{ el: '.swiper-pagination'},{clickable: true}} >
                                {
                                    shoppingCardFurniture.map((item)=>(
                                         <SwiperSlide>
                                            <ShoppingCard item={item}/>
                                        </SwiperSlide> 
                                    ))}
                            </Swiper>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    </div>
                </div>
            </Route>
            <Route path='/Decoration'>
                 <div className="lunchbox-wrapper">
                    <div className="lunchbox">

                    <div id="swiper1" className="swiper-container"> 

                        <div className="swiper-wrapper">

                            <div className="swiper-slide swiper-slide-big">
                            <Swiper grabCursor={true} pagination={{"dynamicBullets": true},{ el: '.swiper-pagination'},{clickable: true}} >
                                {
                                    shoppingCardDecoration.map((item)=>(
                                        <SwiperSlide>
                                            <ShoppingCard item={item}/>
                                        </SwiperSlide> 
                                    ))}
                            </Swiper>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    </div>
                </div> 
            </Route>
            <Route path='/Lighting'>
                <div className="lunchbox-wrapper">
                    <div className="lunchbox">

                    <div id="swiper1" className="swiper-container"> 

                        <div className="swiper-wrapper">

                            <div className="swiper-slide swiper-slide-big">
                            <Swiper grabCursor={true} pagination={{"dynamicBullets": true},{ el: '.swiper-pagination'},{clickable: true}} >
                                {
                                    shoppingCardLighting.map((item)=>(
                                        <SwiperSlide >
                                            <ShoppingCard item={item} className='SwiperSlide'/>
                                        </SwiperSlide> 
                                    ))}
                            </Swiper>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    </div>
                </div>
            </Route>
        </Switch>
    </div>
    )
}
