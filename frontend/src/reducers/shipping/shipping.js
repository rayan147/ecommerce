import SHIPPING_CONSTANTS from '../../constants/shippingConstants'
const {CART_SAVE_SHIPPING_ADDRESS} = SHIPPING_CONSTANTS

const shippingReducer = (state = {}, action) => {
    switch (action.type) {
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                data:action.payload
            }
            
        default:
            return state
           
    }
}

export default shippingReducer