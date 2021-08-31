import axios from 'axios'

import ADMIN_CONSTANTS from '../../constants/adminConstants'
import { USER_CONSTANTS } from "../../constants/userConstants"

import logout from "../user/logout"

const  {
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    } = USER_CONSTANTS
const {
    ADMIN_USER_UPDATE_REQUEST,
    ADMIN_USER_UPDATE_SUCCESS,
    ADMIN_USER_UPDATE_FAILURE,
   
} = ADMIN_CONSTANTS;
 
 
 const admninUpdatedUser = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMIN_USER_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(`/api/auth/users/${user._id}`, user, config)
  
      dispatch({ type: ADMIN_USER_UPDATE_SUCCESS })
  
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  
      dispatch({ type: USER_DETAILS_RESET })
    } catch (error) {
      const message =error.response?.data?.message ?? error.message
      if (message === 'Unauthorized,no token provide') {
        dispatch(logout())
      }
      dispatch({
        type: ADMIN_USER_UPDATE_FAILURE,
        payload: message,
      })
    }
  }

  export default admninUpdatedUser