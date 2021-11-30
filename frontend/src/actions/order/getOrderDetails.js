
import axios from "axios"

import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_DETAILS_FAILURE,
    ORDER_DETAILS_REQUEST_START,
    ORDER_DETAILS_SUCCESS
     
 } = ORDER_STATUS;
 

const getOrderDetails = (id) => async (dispatch,getState,api) => {
    try {
      dispatch({
        type: ORDER_DETAILS_REQUEST_START,
      })
    const {userLogin:{userInfo}} = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await api.get( `/orders/${id}`, config
      )
  
   

    dispatch({  
        type: ORDER_DETAILS_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAILURE,
        payload: error?.response?.data?.message ?? error.message
         
      })
    }
  }

export default getOrderDetails