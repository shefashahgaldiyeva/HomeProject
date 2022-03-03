import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { matchPath } from 'react-router';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';
import Wishlist from './components/Wishlist.js';
import ProductView from './components/ProductView.js';



const App = () => {

  return (
		<div className="App">
			<TopHeader/>
			<Header/>
			<Switch>
				<Route path='/Shop'>
					<Shop/>
				</Route>
				<Route path='/Cart'>
					<Cart/>
				</Route>
				<Route path='/Wishlist'>
					<Wishlist/>
				</Route>
				<Route path='/'>
					<Home/>
				</Route>
				<Route path='*'>
					<div>404 not found</div>
				</Route>
				<Route path='/:topicId'>
					<ProductView/>
				</Route>
			</Switch>
			<Footer/>
			
		</div>
  );
}

export default App;


