
import ADMIN_CONSTANTS from "../../constants/adminConstants"

const  {
    ADMIN_USER_DETAILS_REQUEST,
    ADMIN_USER_DETAILS_FAILURE,
    ADMIN_USER_DETAILS_SUCCESS,
    } = ADMIN_CONSTANTS
    const adminGetUserDetails = (id) => async (dispatch,getState,api) => {
        try {
          dispatch({
            type: ADMIN_USER_DETAILS_REQUEST,
          })
        const {userLogin:{userInfo}} = getState()
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`
            },
          }
      
          const { data } = await api.get( `/auth/users/${id}`, config
          )
      
       dispatch({
            type: ADMIN_USER_DETAILS_SUCCESS,
            payload: data,
          })
      
        
        } catch (error) {
          dispatch({
            type: ADMIN_USER_DETAILS_FAILURE,
            payload: error?.response?.data?.message ?? error.message
          })
        }
      }

export default adminGetUserDetails