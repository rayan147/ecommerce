
import { USER_CONSTANTS } from "../../constants/userConstants"

const  {
    USER_DETAILS_REQUEST,
    USER_DETAILS_FAILURE,
    USER_DETAILS_SUCCESS,
    } = USER_CONSTANTS
    const getUserDetails = (id) => async (dispatch,getState,api) => {
        try {
          dispatch({
            type: USER_DETAILS_REQUEST,
          })
        const {userLogin:{userInfo}} = getState()
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`
            },
          }
      
          const { data } = await api.get( `/users/${id}`, config
          )
      
       dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
          })
      
        
        } catch (error) {
          dispatch({
            type: USER_DETAILS_FAILURE,
            payload: error?.response?.data?.message ?? error.message
          })
        }
      }

export default getUserDetails