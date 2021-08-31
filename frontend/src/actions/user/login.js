import axios from "axios"
import { USER_CONSTANTS } from "../../constants/userConstants"
const {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE} = USER_CONSTANTS

const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
          type: USER_LOGIN_REQUEST,
        })
    
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
    
        const { data } = await axios.post(
          '/api/users/login',
          { email, password },
          config
        )
    
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        })
    
        localStorage.setItem('userInfo', JSON.stringify(data))
      } catch (error) {
        dispatch({
          type: USER_LOGIN_FAILURE,
          payload: error?.response?.data?.message ?? error.message
            
        })
      }
}
export default login