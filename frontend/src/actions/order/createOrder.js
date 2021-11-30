
import axios from "axios"

import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_CREATE_FAILURE,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST_SUCCESS,
    ORDER_CREATE_REQUEST_FAILURE,
    ORDER_CREATE_REQUEST_START,
    
} = ORDER_STATUS;

const createOrder = (order) => async (dispatch,getState,api) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST_START,
      })
    const {userLogin:{userInfo}} = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
      }
  
      const { data } = await api.post( `/orders`,order, config
      )
  
    dispatch({
        type: ORDER_CREATE_REQUEST_SUCCESS,
        payload: 'order request successfully',
      })

    dispatch({  
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
     
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_REQUEST_FAILURE,
            payload: error,
          })
      dispatch({
        type: ORDER_CREATE_FAILURE,
        payload: error?.response?.data?.message ?? error.message
      })
    }
  }

export default createOrder