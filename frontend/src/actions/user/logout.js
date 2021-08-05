import { USER_CONSTANTS } from "../../constants/userContants"
const {USER_LOGOUT_SUCCESS} = USER_CONSTANTS

const logout = (dispatch) => dispatch=>{
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT_SUCCESS
    })
}
export default logout