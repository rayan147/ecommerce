
import axios from "axios"

import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_PAYMENT_FAILURE,
    ORDER_PAYMENT_REQUEST_START,
    ORDER_PAYMENT_SUCCESS
     
 } = ORDER_STATUS;
 

const orderPay = (orderId,paymentResult) => async (dispatch,getState,api) => {
    try {
      dispatch({
        type: ORDER_PAYMENT_REQUEST_START,
      })
    const {userLogin:{userInfo}} = getState()
      const config = {
        headers: {
         'Content-Type':'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await api.put( `/orders/${orderId}/pay`,paymentResult, config
      )
  
   

    dispatch({  
        type: ORDER_PAYMENT_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: ORDER_PAYMENT_FAILURE,
        payload:  error?.response?.data?.message ?? error.message
         
      })
    }
  }

export default orderPay;