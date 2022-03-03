import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown} from 'react-icons/io';
import styles from './css/Header.module.css'
import './css/Toogle.css'
import oliaLogo from '../img/oliaLogo.jpg';
import { useSelector } from 'react-redux';

const Header = () => {

    const selector = useSelector(state => state.bucketReducers)
    const [isActive, setActive] = useState(false)
    const toogleClass = () => {
        setActive(!isActive);
    }

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.logo}><img src={oliaLogo}/></div>
                    <ul>
                        <li className={styles.dropHome}>
                            <Link to='/'>Home<IoIosArrowDown/></Link>
                            <div className={styles.hiddenHome}>
                                <div className={styles.openHome}></div> 
                            </div>
                        </li>
                        <li><Link to='/Shop'>Shop</Link></li>
                        <li className={styles.dropProduct}>
                            <Link to="/Product">Product<IoIosArrowDown/></Link>
                            <div className={styles.openProduct}>
                                <div className={styles.innerOpenProduct}>
                                    <div className={styles.leftProduct}>
                                        <span>PRODUCT DETAILS</span>
                                        <ul>
                                            <li><a href="#">Default</a></li>
                                            <li><a href="#">Centered</a></li>
                                            <li><a href="#">Extended info</a></li>
                                            <li><a href="#">Gallery</a></li>
                                            <li><a href="#">Sticky Info</a></li>
                                            <li><a href="#">Boxed Width Sidebar</a></li>
                                            <li><a href="#">Full Width</a></li>
                                            <li><a href="#">Masonry Sticky Info</a></li>
                                        </ul>
                                    </div> 
                                    <div className={styles.rightProduct}>
                                        <span>New trends</span>
                                        <strong>Spring 2021</strong>
                                    </div> 
                                </div>
                            </div>
                        </li>
                        <li className={styles.dropPages}>
                            <Link to="/Pages">Pages<IoIosArrowDown/></Link>
                            <div className={styles.openPages}>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Error 404</a></li>
                                    <li><a href="#">Coming soon</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="/Blog">Blog</Link></li>
                    </ul>
                </div>
                <div className={styles.searchCart}>
                    <label onClick={toogleClass} for='search'><BsSearch/></label>
                    <input className={isActive ? 'active' : 'passive'} name='search' type="text" placeholder='Search product...'/>
                    <div className={styles.cartCount}>
                        <Link to="/Cart"><div className={styles.cart}><AiOutlineShoppingCart/></div></Link>
                        <div className={styles.count}>{selector.length}</div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;



// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }