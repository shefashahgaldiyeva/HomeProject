import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductView = () => {

    const match = useRouteMatch();
    console.log(match)
    const select = useSelector(state => state.allDataReducer)
    // const selector = useSelector(state => state.allDataReducer.filter(index => index.id === match.topicId ))
    console.log(select)
    return (
        <div>
            buradir
        </div>
    )
}

export default ProductView;
