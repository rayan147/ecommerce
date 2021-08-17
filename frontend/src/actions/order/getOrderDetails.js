
import axios from "axios"

import ORDER_STATUS from "../../constants/orderContants";

const {
    ORDER_DETAIL_FAILURE,
    ORDER_DETAIL_REQUEST_START,
    ORDER_DETAIL_SUCCESS
     
 } = ORDER_STATUS;
 

const getOrderDetails = (id) => async (dispatch,getState) => {
    try {
      dispatch({
        type: ORDER_DETAIL_REQUEST_START,
      })
    const {userLogin:{userInfo}} = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await axios.get( `/api/orders/${id}`, config
      )
  
   

    dispatch({  
        type: ORDER_DETAIL_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
    
      dispatch({
        type: ORDER_DETAIL_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export default getOrderDetails