import axios from 'axios';

import {CART_TYPES_CHOICES} from '../../constants/cartConstants'
const {CART_ADD_TO_CART} = CART_TYPES_CHOICES

const addToCart = (productId, quantity) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/products/${productId}`);
    const {price,_id,image,countInStock,name} = data;
    dispatch({
        type: CART_ADD_TO_CART,
        payload: {
            quantity,
            name,
            price,
            image,
            countInStock,
            product_id:_id,
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export default addToCart;