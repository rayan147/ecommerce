import axios from "axios"
import { USER_CONSTANTS } from "../../constants/userConstants"

const  {
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_FAILURE,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_LOGIN_SUCCESS,
    } = USER_CONSTANTS
    const updateUserProfile = (user) => async (dispatch,getState,api) => {
        try {
          dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
          })
        const {userLogin:{userInfo}} = getState()
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`
            },
          }
      
          const { data } = await api.put( `/api/users/profile`,user, config
          )
      
       dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data,
          })
      
       dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
      
        localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
          dispatch({
            type: USER_UPDATE_PROFILE_FAILURE,
            payload:  error?.response?.data?.message ?? error.message
          })
        }
      }

export default updateUserProfile