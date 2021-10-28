import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import reducer from './combineReducer'

const loadCartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []
const loadUserInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse
(localStorage.getItem('userInfo')) : null
const loadshippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? JSON.parse
(localStorage.getItem('shippingAddress')) : {}
// const loadPaymentInfoFromLocalStorage = localStorage.getItem('paymentMethod') ? JSON.parse (localStorage.getItem('paymentMethod')) : {}


const initialState = {
    cart: { 
        cartItems: loadCartItemsFromLocalStorage,
        shippingAddress: loadshippingAddressFromLocalStorage,
        // paymentMethod: loadPaymentInfoFromLocalStorage
    },
    userLogin: { userInfo: loadUserInfoFromLocalStorage},
    
    
    
}

const middleware = [thunk]
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store