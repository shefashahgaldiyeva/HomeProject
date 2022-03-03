import React,{ useState } from 'react'
import Swiper from './Swiper.js';
import ContainerCard from './ContainerCard.js'

import styles from './css/Container.module.css'

import chair from '../img/chair.jpg'
import groin from '../img/groin.jpg'
import barrel from '../img/barrel.png'
import something from '../img/something.png'
import costa from '../img/costa.png'
import oceanic from '../img/oceanic.png'
import fountain from '../img/fountain.png'
import blackBiros from '../img/blackBiros.png'



const Container = () => {

    const [conCard, setConCard] = useState([     
        {
            h4 : 'Clearance',
            h3 : 'Chairs & Chaises',
            h2 : 'Up to 40% off',
            a : 'Shop Now',
            img : chair,
            // url : 
            id : 1
        },{
            h4 : 'New in',
            h3 : 'Kitchen & Dinning',
            h2 : 'Collection',
            a : 'Discover Now',
            img : groin,
            id : 2
        }
    ])  
    const [link,setLink] = useState([barrel,something,costa,oceanic,fountain,blackBiros])


    return (
        <div className={styles.container}>
            <div className={styles.conInner}>
                <div className={styles.left}>
                    <Swiper/>
                </div>
                <div className={styles.right}>
                {
                        conCard.map((c) => (
                            <ContainerCard 
                                h4 = {c.h4}
                                h3 = {c.h3}
                                h2 = {c.h2}
                                a = {c.a}
                                img = {c.img}
                                id = {c.id}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.allied}>
                <div className={styles.alliedInner}>
                {
                    link.map((link)=>(
                        <div><a href='#'><img src={link}/></a></div>
                    ))

                }
                </div>
                
            </div>
        </div>
    )
}
export default Container;

// https://codepen.io/yamoo/pen/aYoqqW //zoom
// https://codepen.io/onderakbulut/pen/jOwNyMV //product
//https://codepen.io/bdang/pen/pJyYEO //swiper

//https://codepen.io/pizza3/pen/pLXPga  //card

//https://codepen.io/aaronkahlhamer/pen/oeVQxQ //swiper tek tek
// https://codepen.io/suez/pen/OjGQza  //havali container
//https://codepen.io/hexagoncircle/pen/WNbzJMZ  //scrool change home