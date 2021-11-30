import axios from "axios"

import ORDER_STATUS from "../../constants/orderConstants";
import logout from "../user/logout"
const {
    ORDER_DELIVER_SUCCESS,
    ORDER_DELIVER_FAILURE,
    ORDER_DELIVER_REQUEST,
     
 } = ORDER_STATUS;
 
 
 
 
 
 
 
 const deliverOrder = (order) => async (dispatch, getState,api) => {
    try {
      dispatch({
        type: ORDER_DELIVER_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await api.put(
        `/api/orders/${order._id}/deliver`,
        {},
        config
      )
  
      dispatch({
        type: ORDER_DELIVER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type:ORDER_DELIVER_FAILURE,
        
        payload: message,
      })
    }
  }

export default deliverOrder