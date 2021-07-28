import {combineReducers} from 'redux'
import {
    productListReducer,
    productDetailsReducer
} from '../reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})
export default reducer