import { createStore, combineReducers } from 'redux'
import bucketReducers from './bucketReducers'
import wishlistReducers from './wishlistReducers'
// import allDataReducer from './allDataReducer'
import shoppingCardAllReducer from './shoppingCardAllReducer'
import shoppingCardFurnitureReducer from './shoppingCardFurnitureReducer'
import shoppingCardDecorationReducer from './shoppingCardDecorationReducer'
import shoppingCardLightingReducer from './shoppingCardLightingReducer'

const reducers = combineReducers({
    bucketReducers,
    wishlistReducers,
    // allDataReducer,
    shoppingCardAllReducer,
    shoppingCardFurnitureReducer,
    shoppingCardDecorationReducer,
    shoppingCardLightingReducer
    
})


export default function configureStore() {
    return  createStore(reducers)
}
