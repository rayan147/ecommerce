import { USER_CONSTANTS } from "../../constants/userConstants"
import ORDER_STATUS from "../../constants/orderConstants"
import ADMIN_CONSTANTS from '../../constants/adminConstants'
const {USER_LOGOUT_SUCCESS,USER_DETAILS_RESET} = USER_CONSTANTS

const {ORDER_USER_LIST_RESET} = ORDER_STATUS

const {ADMIN_USER_LIST_RESET} =ADMIN_CONSTANTS

const logout = (dispatch) => dispatch=>{
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    dispatch({
        type: USER_LOGOUT_SUCCESS
    })
    dispatch({
        type: USER_DETAILS_RESET
    })
    dispatch({
        type: ORDER_USER_LIST_RESET
    })
    dispatch({
        type: ADMIN_USER_LIST_RESET
    })



    document.location.href = '/login'
}




export default logout