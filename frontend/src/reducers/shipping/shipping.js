import SHIPPING_CONSTANTS from '../../constants/shippingContants'
const {CART_SAVE_SHIPPING_ADDRESS} = SHIPPING_CONSTANTS

const shippingReducer = (state = {}, action) => {
    switch (action.type) {
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress:action.payload
            }
            
        default:
            return state
           
    }
}

export default shippingReducer