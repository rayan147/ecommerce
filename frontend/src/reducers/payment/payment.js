import PAYMENT_CONSTANTS from "../../constants/paymentConstants";

const {CART_SAVE_PAYMENT_METHOD} = PAYMENT_CONSTANTS;


const paymentReducer = (state = {}, action) => {
    switch (action.type) {
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            };
        default:
            return state;
    }
}
export default paymentReducer;