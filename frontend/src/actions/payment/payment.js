import PAYMENT_CONSTANTS from "../../constants/paymentContants";

const {CART_SAVE_PAYMENT_METHOD} = PAYMENT_CONSTANTS;

const savePaymentMethod = (data) => dispatch => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload:data
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data));
}
export default savePaymentMethod;