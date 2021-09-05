
import axios from 'axios';
import PRODUCT_CONSTANTS from '../../constants/productConstants'
const {
    PRODUCT_DETAILS_FAILURE,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} = PRODUCT_CONSTANTS

 const listProductDetails =(id) => async (dispatch) => {
   try {
       dispatch({type: PRODUCT_DETAILS_REQUEST})
       const {data} = await axios(`/api/products/${id}`)
       dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
   } catch (error) {
       dispatch({
           type: PRODUCT_DETAILS_FAILURE, 
           payload:  error?.response?.data?.message ?? error.message
        })
   }
}
export default listProductDetails