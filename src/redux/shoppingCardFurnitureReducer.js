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


    let  shoppingCardFurniture  = [
        {
                    img: card_8,
                    img2: card_8H,
                    category: 'Furniture,Armchairs & Chaises',
                    h3: 'Flow Slim Armchair',
                    price: '97.00',
                    review: 2,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART',
                    id: 8,
                    quantity: 1,
                    total: 0
                }, {
                    img: card_9,
                    img2: card_9H,
                    category: 'Decoration,Furniture',
                    h3: 'Foldable Tray Table',
                    price: '250.00',
                    review: 3,
                    btnIcon: <BsListCheck/>,
                    btn: 'SELECT OPTIONS',
                    id: 9,
                    quantity: 1,
                    total: 0
                }, {
                    img: card_10,
                    img2: card_10H,
                    category: 'Decoration,Furniture,Armchairs & Chaises',
                    h3: 'Garden Armchair',
                    price: '90.00',
                    review: 2,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART',
                    id: 10,
                    quantity: 1,
                    total: 0
                },{
                    img: card_1,
                    img2: card_1H,
                    category: 'Furniture',
                    h3: '2-Seater',
                    price: '248.00',
                    review: 2,
                    btnIcon: <RiErrorWarningFill/>,
                    btn: 'OUT OF STOCK',
                    id: 1,
                    quantity: 1,
                    total: 0
                }, {
                    img: card_2,
                    img2: card_2H,
                    category: 'Coffee & Tables,Furniture,Tables',
                    h3: 'Block Side Table/Trolley',
                    price: '210.00',
                    review: 3,
                    btnIcon: <BsListCheck/>,
                    btn: 'SELECT OPTIONS',
                    id: 2,
                    quantity: 1,
                    total: 0
                }, {
                    img: card_3,
                    img2: card_3H,
                    category: 'Furniture',
                    h3: 'Butler Stool Ladder',
                    price: '20.00',
                    review: 2,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART',
                    id: 3,
                    quantity: 1,
                    total: 0
                }, {
                    img: card_4,
                    img2: card_4H,
                    category: 'Furniture',
                    h3: 'Can 2-Seater Sofa',
                    price: '60.00',
                    review: 5,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART',
                    id: 4,
                    quantity: 1,
                    total: 0
                }, {
                    img: card_5,
                    img2: card_5H,
                    category: 'Furniture',
                    h3: 'Roots Sofa Bed',
                    price: '449.00',
                    review: 3,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART',
                    id: 5,
                    quantity: 1,
                    total: 0
                },
    ]


const shoppingCardFurnitureReducer = (state = shoppingCardFurniture ,action) =>{
    switch (action.type){
        case 'FURNITURE': 
            console.log(action.payload)
            return  [...state,action.payload]
        
        default: 
            return state
    }
}
export default shoppingCardFurnitureReducer;