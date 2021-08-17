import {combineReducers} from 'redux'

import productListReducer from '../reducers/product/productListReducer'
import productDetailsReducer from '../reducers/product/productDetailsReducer'

import userLoginReducer from '../reducers/user/userLoginReducer'
import userRegisterReducer from '../reducers/user/userRegisterReducer'
import cartReducer from '../reducers/cart/cartReducers'
import userDetailsReducer from '../reducers/user/userDetailsReducer'
import userUpdateProfileReducer from '../reducers/user/userUpdateProfileReducer'
import shippingReducer from '../reducers/shipping/shipping'
import paymentReducer from '../reducers/payment/payment'
import orderCreateReducer from '../reducers/order/orderReducer'
import orderDetailsReducer from '../reducers/order/orderDetailsReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdatedProfile: userUpdateProfileReducer,
    shippingAddress: shippingReducer,
    payment: paymentReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer
})
export default reducer