
import axios from 'axios';
import PRODUCT_CONSTANTS from '../../constants/productConstants'
const {
    PRODUCT_LIST_FAILURE,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
   
} = PRODUCT_CONSTANTS

 const listProducts =() => async (dispatch, getState) => {
   try {
       dispatch({type: PRODUCT_LIST_REQUEST})
       const {data} = await axios('/api/products')
       dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
   } catch (error) {
       dispatch({
           type: PRODUCT_LIST_FAILURE, 
           payload:  error?.response?.data?.message ?? error.message
        })
   }
}
export default listProducts