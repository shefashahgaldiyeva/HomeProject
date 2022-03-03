import React from 'react'
import {Link} from 'react-router-dom'
import styles from './css/OurBlog.module.css'
import {BsArrowRight} from 'react-icons/bs'
import blog_1 from '../img/blog_1.jpg'
import blog_2 from '../img/blog_2.jpg'
import blog_3 from '../img/blog_3.jpg'

const OurBlog = () => {
    return (
        <div className={styles.OurBlog}>
            <div className={styles.OurBlogInner}>
                <h2>From Our Blog</h2>
                <div className={styles.OurBlogText}>
                    <div>
                        <Link to='/Blog'><img src={blog_1}/></Link>
                        <div className={styles.dateInner}>
                            <div className={styles.date}>
                                    <a href='#'>Sep 22, 2020,</a>
                                    <a href='#'>0 Comments</a>
                            </div>
                            <h2><Link to='/Blog'>Sed adipiscing odbrnare.</Link></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.Pelletesque aliquet nibh necurna.</p>
                            <span className={styles.a}><Link to='/Blog'>Read More<span className={styles.icon}><BsArrowRight/></span></Link></span>
                        </div>
                    </div>
                    <div>
                        <Link to='/Blog'><img src={blog_2}/></Link>
                        <div className={styles.dateInner}>
                            <div className={styles.date}>
                                    <a href='#'>May 12, 2020,</a>
                                    <a href='#'>0 Comments</a>
                            </div>
                            <h2><Link to='/Blog'>Fusce lacifgbnia arcuet nulla.</Link></h2>
                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis justo.</p>
                            <span className={styles.a}><Link to='/Blog'>Read More<span className={styles.icon}><BsArrowRight/></span></Link></span>
                        </div>
                    </div>
                    <div>
                        <Link to='/Blog'><img src={blog_3}/></Link>
                        <div  className={styles.dateInner}>
                            <div className={styles.date}>
                                    <a href='#'>May 19, 2020,</a>
                                    <a href='#'>2 Comments</a>
                            </div>
                            <h2><Link to='/Blog'>Quisque volutpat mdbattis eros.</Link></h2>
                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis justo.</p>
                            <span className={styles.a}><Link to='/Blog'>Read More<span className={styles.icon}><BsArrowRight/></span></Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBlog;
