import axios from 'axios';
import PRODUCT_CONSTANTS from '../../constants/productConstants'
import logout from "../user/logout" 
const {
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAILURE,
   
} = PRODUCT_CONSTANTS
 
 const createProduct = () => async (dispatch, getState,api) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await api.post(`/api/products`, {}, config)
  
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Unauthorized,no token provide') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_FAILURE,
        payload: message,
      })
    }
  }

  export default createProduct