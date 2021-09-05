import axios from "axios"

import ORDER_STATUS from "../../constants/orderConstants";
import logout from "../user/logout"
const {
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAILURE,
    ORDER_LIST_REQUEST,
     
 } = ORDER_STATUS;
 
 
 
 const listOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders`, config)
  
      dispatch({
        type: ORDER_LIST_SUCCESS,
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
        type: ORDER_LIST_FAILURE,
        payload: message,
      })
    }
  }

  export default listOrders