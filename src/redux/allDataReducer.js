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


    let shoppingCardAll = [
     {
                img: card_1,
                img2: card_1H,
                category: 'Furniture',
                h3: '2-Seater',
                price: '$248.00',
                review: 2,
                btnIcon: <RiErrorWarningFill/>,
                btn: 'OUT OF STOCK'
            }, {
                img: card_2,
                img2: card_2H,
                category: 'Coffee & Tables,Furniture,Tables',
                h3: 'Block Side Table/Trolley',
                price: '$210.00 -$240.00',
                review: 3,
                btnIcon: <BsListCheck/>,
                btn: 'SELECT OPTIONS'
            }, {
                img: card_3,
                img2: card_3H,
                category: 'Furniture',
                h3: 'Butler Stool Ladder',
                price: '$20.00',
                review: 2,
                btnIcon: <FaCartArrowDown/>,
                btn: 'ADD TO CART'
            }, {
                img: card_4,
                img2: card_4H,
                category: 'Furniture',
                h3: 'Can 2-Seater Sofa',
                price: '$60.00',
                review: 5,
                btnIcon: <FaCartArrowDown/>,
                btn: 'ADD TO CART'
            }, {
                img: card_5,
                img2: card_5H,
                category: 'Furniture',
                h3: 'Roots Sofa Bed',
                price: '$449.00',
                review: 3,
                btnIcon: <FaCartArrowDown/>,
                btn: 'ADD TO CART'
            }, {
                img: card_6,
                img2: card_6H,
                category: 'Decoration,Electronics,Lighting',
                h3: 'Carronade Table Lamp',
                price: '$110.00-$150.00',
                review: 2,
                btnIcon: <FaCartArrowDown/>,
                btn: 'ADD TO CART'
            }
    ]
    let  shoppingCardFurniture  = [
        {
                    img: card_8,
                    img2: card_8H,
                    category: 'Furniture,Armchairs & Chaises',
                    h3: 'Flow Slim Armchair',
                    price: '$97.00',
                    review: 2,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART'
                }, {
                    img: card_9,
                    img2: card_9H,
                    category: 'Decoration,Furniture',
                    h3: 'Foldable Tray Table',
                    price: '$250.00-$280.00',
                    review: 3,
                    btnIcon: <BsListCheck/>,
                    btn: 'SELECT OPTIONS'
                }, {
                    img: card_10,
                    img2: card_10H,
                    category: 'Decoration,Furniture,Armchairs & Chaises',
                    h3: 'Garden Armchair',
                    price: '$90.00',
                    review: 2,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART'
                },{
                    img: card_1,
                    img2: card_1H,
                    category: 'Furniture',
                    h3: '2-Seater',
                    price: '$248.00',
                    review: 2,
                    btnIcon: <RiErrorWarningFill/>,
                    btn: 'OUT OF STOCK'
                }, {
                    img: card_2,
                    img2: card_2H,
                    category: 'Coffee & Tables,Furniture,Tables',
                    h3: 'Block Side Table/Trolley',
                    price: '$210.00 -$240.00',
                    review: 3,
                    btnIcon: <BsListCheck/>,
                    btn: 'SELECT OPTIONS'
                }, {
                    img: card_3,
                    img2: card_3H,
                    category: 'Furniture',
                    h3: 'Butler Stool Ladder',
                    price: '$20.00',
                    review: 2,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART'
                }, {
                    img: card_4,
                    img2: card_4H,
                    category: 'Furniture',
                    h3: 'Can 2-Seater Sofa',
                    price: '$60.00',
                    review: 5,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART'
                }, {
                    img: card_5,
                    img2: card_5H,
                    category: 'Furniture',
                    h3: 'Roots Sofa Bed',
                    price: '$449.00',
                    review: 3,
                    btnIcon: <FaCartArrowDown/>,
                    btn: 'ADD TO CART'
                },
    ]
    let shoppingCardDecoration = [
        {
            img: card_6,
            img2: card_6H,
            category: 'Decoration,Electronics,Lighting',
            h3: 'Carronade Table Lamp',
            price: '$110.00-$150.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },{
            img: card_7,
            img2: card_7H,
            category: 'Decoration,Beds',
            h3: 'Cushion Set 3 Pieces',
            price: '$199.00',
            review: 4,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        }, {
            img: card_9,
            img2: card_9H,
            category: 'Decoration,Furniture',
            h3: 'Foldable Tray Table',
            price: '$250.00-$280.00',
            review: 3,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        }, {
            img: card_10,
            img2: card_10H,
            category: 'Decoration,Furniture,Armchairs & Chaises',
            h3: 'Garden Armchair',
            price: '$90.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },{
            img: card_13,
            img2: card_13H,
            category: 'Storage Boxes & Baskets,Decor,Decoration',
            h3: 'Original Outdoor Beanbag',
            price: '$80.00',
            review: 5,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },
    ]
    let shoppingCardLighting = [
        {
            img: card_6,
            img2: card_6H,
            category: 'Decoration,Electronics,Lighting',
            h3: 'Carronade Table Lamp',
            price: '$110.00-$150.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },{
            img: card_11,
            img2: card_11H,
            category: 'Lighting',
            h3: 'Carronade Large Suspension Lamp',
            price: '$341.00-$350.00',
            review: 3,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        },{
            img: card_12,
            img2: card_12H,
            category: 'Lighting',
            h3: 'Petite Table Lamp',
            price: '$65.00-$73.00',
            review: 1,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        }
    ]
   
    // let routeTrendy = [
    //     shoppingCardAll,
    //     shoppingCardFurniture,
    //     shoppingCardDecoration,
    //     shoppingCardLighting
    // ]
    // routeTrendy.forEach(route => {
    //     console.log(route)
    // })
        
          
let data = [
        {
            img: card_1,
            img2: card_1H,
            category: 'Furniture',
            h3: '2-Seater',
            price: '$248.00',
            review: 2,
            btnIcon: <RiErrorWarningFill/>,
            btn: 'OUT OF STOCK'
        }, {
            img: card_2,
            img2: card_2H,
            category: 'Coffee & Tables,Furniture,Tables',
            h3: 'Block Side Table/Trolley',
            price: '$210.00 -$240.00',
            review: 3,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        }, {
            img: card_3,
            img2: card_3H,
            category: 'Furniture',
            h3: 'Butler Stool Ladder',
            price: '$20.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        }, {
            img: card_4,
            img2: card_4H,
            category: 'Furniture',
            h3: 'Can 2-Seater Sofa',
            price: '$60.00',
            review: 5,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        }, {
            img: card_5,
            img2: card_5H,
            category: 'Furniture',
            h3: 'Roots Sofa Bed',
            price: '$449.00',
            review: 3,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        }, {
            img: card_6,
            img2: card_6H,
            category: 'Decoration,Electronics,Lighting',
            h3: 'Carronade Table Lamp',
            price: '$110.00-$150.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },{
            img: card_7,
            img2: card_7H,
            category: 'Decoration,Beds',
            h3: 'Cushion Set 3 Pieces',
            price: '$199.00',
            review: 4,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },{
            img: card_8,
            img2: card_8H,
            category: 'Furniture,Armchairs & Chaises',
            h3: 'Flow Slim Armchair',
            price: '$97.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        }, {
            img: card_9,
            img2: card_9H,
            category: 'Decoration,Furniture',
            h3: 'Foldable Tray Table',
            price: '$250.00-$280.00',
            review: 3,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        }, {
            img: card_10,
            img2: card_10H,
            category: 'Decoration,Furniture,Armchairs & Chaises',
            h3: 'Garden Armchair',
            price: '$90.00',
            review: 2,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        },{
            img: card_11,
            img2: card_11H,
            category: 'Lighting',
            h3: 'Carronade Large Suspension Lamp',
            price: '$341.00-$350.00',
            review: 3,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        },{
            img: card_12,
            img2: card_12H,
            category: 'Lighting',
            h3: 'Petite Table Lamp',
            price: '$65.00-$73.00',
            review: 1,
            btnIcon: <BsListCheck/>,
            btn: 'SELECT OPTIONS'
        },{
            img: card_13,
            img2: card_13H,
            category: 'Storage Boxes & Baskets,Decor,Decoration',
            h3: 'Original Outdoor Beanbag',
            price: '$80.00',
            review: 5,
            btnIcon: <FaCartArrowDown/>,
            btn: 'ADD TO CART'
        }
]
console.log(data)
// routeTrendy.forEach(route => route)

const allDataReducer = (state = data ,action) =>{
    switch (action.type){
        case 'ALL': 
            // console.log(action.payload)
            return  [...state, action.payload]
        
        default: 
            console.log(state)

            return state
    }
}
export default allDataReducer;