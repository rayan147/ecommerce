import axios from "axios"
import ADMIN_CONSTANTS from '../../constants/adminConstants'

const  {
  ADMIN_USER_LIST_REQUEST,
  ADMIN_USER_LIST_SUCCESS,
  ADMIN_USER_LIST_FAILURE
    } = ADMIN_CONSTANTS
    const listUsers = () => async (dispatch,getState) => {
        try {
          dispatch({
            type: ADMIN_USER_LIST_REQUEST,
          })
        const {userLogin:{userInfo}} = getState()
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            },
          }
      
          const { data } = await axios.get( `/api/auth/users`, config
          )
      
       dispatch({
            type: ADMIN_USER_LIST_SUCCESS,
            payload: data,
          })
      

        } catch (error) {
          dispatch({
            type: ADMIN_USER_LIST_FAILURE,
            payload:  error?.response?.data?.message ?? error.message
          })
        }
      }

export default listUsers