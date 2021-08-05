import {combineReducers} from 'redux'

import productListReducer from '../reducers/product/productListReducer'
import productDetailsReducer from '../reducers/product/productDetailsReducer'

import userLoginReducer from '../reducers/user/userLoginReducer'
import userRegisterReducer from '../reducers/user/userRegisterReducer'
import cartReducer from '../reducers/cart/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})
export default reducer