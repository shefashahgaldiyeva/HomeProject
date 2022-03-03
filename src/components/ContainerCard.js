import React from 'react'
import styles from './css/ContainerCard.module.css'

const ContainerCard = (props) => {
    return (
        <div className={styles.conCard}>
            <img src={props.img}></img>
            <div>
                <h4>{props.h4}</h4>
                <h3>{props.h3}</h3>
                <h3>{props.h2}</h3>
                <a href={"#"}>{props.a}</a>
            </div>
        </div>
    )
}
export default ContainerCard;