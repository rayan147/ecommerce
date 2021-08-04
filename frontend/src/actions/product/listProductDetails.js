
import axios from 'axios';
import {PRODUCT_TYPE_CHOICES} from '../../constants/productContants'
const {
    PRODUCT_DETAIL_FAILURE,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS
} = PRODUCT_TYPE_CHOICES

 const listProductDetails =(id) => async (dispatch) => {
   try {
       dispatch({type: PRODUCT_DETAIL_REQUEST})
       const {data} = await axios(`/api/products/${id}`)
       dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: data})
   } catch (error) {
       dispatch({
           type: PRODUCT_DETAIL_FAILURE, 
           payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
   }
}
export default listProductDetails