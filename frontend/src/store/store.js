import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import reducer from './combineReducer'

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []
const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage},
}

const middleware = [thunk]
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store