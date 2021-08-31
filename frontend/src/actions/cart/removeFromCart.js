

import {CART_TYPES_CHOICES} from "../../constants/cartConstants"
const { CART_REMOVE_FROM_CART} = CART_TYPES_CHOICES
 
 const removeFromCart = (productId) => async (dispatch,getState) => {
    dispatch({
        type: CART_REMOVE_FROM_CART,
        payload: productId
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export default removeFromCart;