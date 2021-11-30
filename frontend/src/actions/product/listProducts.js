

import PRODUCT_CONSTANTS from '../../constants/productConstants'
const {
    PRODUCT_LIST_FAILURE,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
   
} = PRODUCT_CONSTANTS

 const listProducts =(keyword='',pageNumber= '') => async (dispatch,_,api) => {
     
   try {
       dispatch({type: PRODUCT_LIST_REQUEST})
       const {data} = await api(`/products?keyword=${keyword}&pageNumber=${pageNumber}`)
       dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
   } catch (error) {
       dispatch({
           type: PRODUCT_LIST_FAILURE, 
           payload:  error?.response?.data?.message ?? error.message
        })
   }
}
export default listProducts