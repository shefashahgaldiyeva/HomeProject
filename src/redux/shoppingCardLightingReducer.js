import {BsListCheck} from 'react-icons/bs'
import {FaCartArrowDown} from 'react-icons/fa'
import {RiErrorWarningFill}  from 'react-icons/ri'
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



    let shoppingCardLighting = [
        {
            img: card_6,
            img2: card_6H,
            category: 'Decoration,Electronics,Lighting',
            h3: 'Carronade Table Lamp',
            price: '110.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART',
            id: 6,
            quantity: 1,
            total: 0
        },{
            img: card_11,
            img2: card_11H,
            category: 'Lighting',
            h3: 'Carronade Large Suspension Lamp',
            price: '341.00',
            review: 3,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS',
            id: 11,
            quantity: 1,
            total: 0
        },{
            img: card_12,
            img2: card_12H,
            category: 'Lighting',
            h3: 'Petite Table Lamp',
            price: '65.00',
            review: 1,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS',
            id: 12,
            quantity: 1,
            total: 0
        }
    ]
 


const shoppingCardLightingReducer = (state = shoppingCardLighting ,action) =>{
    switch (action.type){
        case 'LIGHTING': 
            console.log(action.payload)
            return  [...state,action.payload]
        
        default: 
            return state
    }
}
export default shoppingCardLightingReducer;