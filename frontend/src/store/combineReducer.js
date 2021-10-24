import {combineReducers} from 'redux'

import productListReducer from '../reducers/product/productListReducer'
import productDetailsReducer from '../reducers/product/productDetailsReducer'
import productDeleteReducer from '../reducers/product/productDeleteReducer'
import productCreateReducer from '../reducers/product/productTopRatedReducer'
import productUpdateReducer from '../reducers/product/productUpdateReducer'
import productTopRatedReducer from '../reducers/product/productTopRatedReducer'
import productReviewCreateReducer from '../reducers/product/productReviewCreateReducer'


import cartReducer from '../reducers/cart/cartReducers'

import userLoginReducer from '../reducers/user/userLoginReducer'
import userRegisterReducer from '../reducers/user/userRegisterReducer'
import userDetailsReducer from '../reducers/user/userDetailsReducer'
import userUpdateProfileReducer from '../reducers/user/userUpdateProfileReducer'



import orderCreateReducer from '../reducers/order/orderReducer'
import orderDetailsReducer from '../reducers/order/orderDetailsReducer'
import orderPayReducer from '../reducers/order/orderPayReducer'
import getUserListOrderReducer from '../reducers/order/getUserListOrderReducer'
import orderListReducer  from '../reducers/order/orderListReducer'
import orderDeliverReducer  from '../reducers/order/orderDeliverReducer'


import adminGetUsersListReducer from '../reducers/admin/adminGetUsersListReducer'
import adminDeleteUserReducer from '../reducers/admin/adminDeleteUserReducer'
import adminUpdateUserReducer from  '../reducers/admin/adminUpdateUserReducer '
import  adminGetDetailsReducer from '../reducers/admin/adminGetUserDetails'



const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productTopRated: productTopRatedReducer,
    productReviewCreate:productReviewCreateReducer,
    


    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdatedProfile: userUpdateProfileReducer,
  
    
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    getUserListOrder: getUserListOrderReducer,
    orderList: orderListReducer,
    orderDeliver:orderDeliverReducer,


    adminGetUsersList: adminGetUsersListReducer,
    adminDeleteUser: adminDeleteUserReducer,
    adminUpdateUser:adminUpdateUserReducer,
    adminGetFromUser:adminGetDetailsReducer

})
export default reducer