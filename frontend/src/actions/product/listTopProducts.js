

import PRODUCT_CONSTANTS from '../../constants/productConstants'

const {
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAILURE,
   
} = PRODUCT_CONSTANTS
 
 const listTopProducts = () => async (dispatch,_,api) => {
    try {
      dispatch({ type: PRODUCT_TOP_REQUEST })
  
      const { data } = await api.get(`/api/products/top`)
  
      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_TOP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export default listTopProducts