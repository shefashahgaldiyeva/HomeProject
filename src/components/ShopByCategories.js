import React,{useState, useEffect} from 'react'
import styles from './css/ShopByCategories.module.css'
import ShopByCategoriesCol from './ShopByCategoriesCol.js';
import ShopByCategoriesRow from './ShopByCategoriesRow.js';
import banner_1 from '../img/banner-1.jpg'
import banner_2 from '../img/banner-2.jpg'
import banner_3 from '../img/banner-3.jpg'
import banner_4 from '../img/banner-4.jpg'

const ShopByCategories = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 800);
        });
    }, []);
    // console.log(window.scrollY)

    const [bannerCol, setBannerCol] = useState([
        {
            img: banner_1,
            btn: 'Home Decor'
        }
    ])
    const [bannerCol2, setBannerCOl2] = useState([
        {
            img: banner_4,
            btn: 'Living Room'
        }
    ])
    const [banner2, setBanner2] = useState([
        {
            img: banner_2,
            btn: 'Kitchen & Utensil'
        },{
            img: banner_3,
            btn: 'Lighting'
        }
    ])

    return (
        <div className={styles.categories}>
            <div className={styles.categoriesInner}>
                <h2>Shop by Categories</h2>
                <div className={styles.banner}>
                    <div className={scroll ? styles.mainScrolledLeft : styles.col}>
                        {
                            bannerCol.map((item)=>(
                                <ShopByCategoriesCol
                                    img = {item.img}
                                    btn = {item.btn}
                                />
                            ))
                        }
                    </div>
                   <div className={styles.row}>
                        {
                            banner2.map((item)=>(
                                <ShopByCategoriesRow
                                    img = {item.img}
                                    btn = {item.btn}
                                />
                            ))
                         }
                   </div>
                   <div className={scroll ? styles.mainScrolledRight : styles.col}>
                        {
                            bannerCol2.map((item)=>(
                                <ShopByCategoriesCol
                                    img = {item.img}
                                    btn = {item.btn}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShopByCategories;