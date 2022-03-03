import React,{useState} from 'react';
import styles from './css/Home.module.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './Container.js';
import TrendyProduct from './TrendyProduct.js';
import ShopByCategories from './ShopByCategories.js';
import Recent from './Recent.js';
import Payment from './Payment.js';
import OurBlog from './OurBlog.js';
import FooterTop from './FooterTop.js';
import CartCard from './CartCard.js';



const Home = () => {
	// const handOne =(e)=>{
	// 	let a = document.getElementById("ok").offsetLeft
	// 	let c = e.clientX
	// 	let b= e.clientY
	// 	let d = document.getElementById("ok").getBoundingClientRect().top
	// 	// let d = e.Y
	// 	console.log((b-d)/4)
	// 	e.target.style.backgroundPosition=`${(c-a)/2}% ${(b-d)/4}%`
	// 	e.target.style.backgroundSize=`250% 250%`
	// 	}

	return (
		<div className={styles.home}>
			<Container/>
			<TrendyProduct/>
			<ShopByCategories/>
			<Recent/>
			<Payment/>
			<OurBlog/>
			<FooterTop/>
			{/* <CartCard/> */}
		</div>
	);
}

export default Home;


