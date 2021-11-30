import axios from "axios"
import  ADMIN_CONSTANTS  from "../../constants/adminConstants"

import logout from '../user/logout'
const {
  ADMIN_USER_DELETE_SUCCESS,
  ADMIN_USER_DELETE_FAILURE,
  ADMIN_USER_DELETE_REQUEST
} = ADMIN_CONSTANTS

const deleteUser = (id) => async (dispatch, getState,api) => {
  
    try {
      dispatch({
        type: ADMIN_USER_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await api.delete(`/api/auth/users/${id}`, config)
  
      dispatch({ type: ADMIN_USER_DELETE_SUCCESS })
    } catch (error) {
      const message =error?.response?.data?.message ?? error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ADMIN_USER_DELETE_FAILURE,
        payload: message,
      })
    }
  }
export default deleteUser