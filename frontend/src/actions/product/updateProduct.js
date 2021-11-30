import axios from 'axios';
import PRODUCT_CONSTANTS from '../../constants/productConstants'
import logout from "../user/logout" 
const {
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_UPDATE_FAILURE
   
} = PRODUCT_CONSTANTS
 
 
 const updateProduct = (product) => async (dispatch, getState,api) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await api.put(
        `/api/products/${product._id}`,
        product,
        config
      )
  
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Unauthorized,no token provide') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_UPDATE_FAILURE,
        payload: message,
      })
    }
  }

  export default   updateProduct