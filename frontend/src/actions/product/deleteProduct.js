import axios from 'axios';
import PRODUCT_CONSTANTS from '../../constants/productConstants'
import logout from "../user/logout"
const {
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_FAILURE
} = PRODUCT_CONSTANTS

const deleteProduct = (id) => async (dispatch, getState,api) => {
    try {
      dispatch({
        type: PRODUCT_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await api.delete(`/products/${id}`, config)
  
      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
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
        type: PRODUCT_DELETE_FAILURE,
        payload: message,
      })
    }
  }

  export default deleteProduct