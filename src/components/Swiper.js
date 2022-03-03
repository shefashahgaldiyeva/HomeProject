import React, { useEffect,useState } from 'react'
import './css/Swiper.css'
import {BsArrowRight} from 'react-icons/bs'
import vaseBg from '../img/vaseBg.png'
import shelfBg from '../img/shelfBg.png'
import vase from '../img/vase.png'
import shelf from '../img/shelf.png'
import {Swiper , SwiperSlide} from 'swiper/react';

const App = () => {
	const [state,setState] = useState([     
		{
			h3 : 'Topsale Collection',
			h1 : 'Best Lighting',
			h2 : 'Collection',
			a : 'Shop Now',
			img : vase,
			color: 'rgb(194, 151, 99)',
			bg: vaseBg,
			// url : 
			id : 1
		},{
			h3 : 'Topsale Collection',
			h1 : 'Wood Cabinet',
			h2 : 'Collection',
			a : 'Shop Now',
			img : shelf,
			color: 'rgb(154, 197, 203)',
			bg: shelfBg,
			id : 2
		}
	])


  return (
    // <div style={{border: '2px solid black'}} className="Appp">
		<div class="swiper mySwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<Swiper grabCursor={true} >
						{state.map(index => (
							<SwiperSlide>
								{
								<div className='swip-wrap-wrapper' style={{backgroundColor: index.color}}>
									<div className='swip-wrap' style={{backgroundImage:`url(${index.bg})`}}>
										<div className="swiper-text" id={index.id}>
											<h3>{index.h3}</h3>
											<h1>{index.h1}</h1>
											<h1>{index.h2}</h1>
											<a href={index.a}>
												<span>SHOP NOW</span>
												<BsArrowRight/>
											</a>
										</div>
										<div className='img-wrapper'><img src={index.img}/></div>
									</div>
								</div>
								}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	
    
    // </div>
  );
}

export default App;