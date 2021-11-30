
import axios from "axios"

import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_USER_LIST_SUCCESS,
    ORDER_USER_LIST_FAILURE,
    ORDER_USER_LIST_REQUEST_START,
     
 } = ORDER_STATUS;
 

const getUserOrderList = () => async (dispatch,getState,api) => {
    try {
      dispatch({
        type: ORDER_USER_LIST_REQUEST_START,
      })
    const {userLogin:{userInfo}} = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await api.get( `/orders/myorders`, config
      )
  
   

    dispatch({  
        type: ORDER_USER_LIST_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: ORDER_USER_LIST_FAILURE,
        payload: error?.response?.data?.message ?? error.message
         
      })
    }
  }

export default getUserOrderList