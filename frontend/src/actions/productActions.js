
import axios from 'axios';
import {PRODUCT_TYPE_CHOICES} from '../constants/productContants'
const {
    PRODUCT_LIST_FAILURE,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS
} = PRODUCT_TYPE_CHOICES
export const listProducts =() => async (dispatch, getState) => {
   try {
       dispatch({type: PRODUCT_LIST_REQUEST})
       const {data} = await axios('/api/products')
       dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
   } catch (error) {
       dispatch({
           type: PRODUCT_LIST_FAILURE, 
           payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
   }
}
export const listProductDetails =(id) => async (dispatch, getState) => {
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