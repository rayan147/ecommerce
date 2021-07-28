import {PRODUCT_TYPE_CHOICES} from '../constants/productContants'
const {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS
} = PRODUCT_TYPE_CHOICES
export const productListReducer = (state = {products:[]}, action) => {
  switch (action.type) { 
      case  PRODUCT_LIST_REQUEST:
          return { ...state, loading: true } 
      case  PRODUCT_LIST_SUCCESS:
          return { ...state, loading: false, products: action.payload }
      case  PRODUCT_LIST_FAILURE:
            return { ...state, loading: false, error: action.payload }
      default:
        return state      
  }
}
export const productDetailsReducer = (state = {product:{reviews:[]}}, action) => {
  switch (action.type) { 
      case  PRODUCT_DETAIL_REQUEST:
          return { ...state, loading: true } 
      case  PRODUCT_DETAIL_SUCCESS:
          return { ...state, loading: false, product: action.payload }
      case  PRODUCT_DETAIL_FAILURE:
            return { ...state, loading: false, error: action.payload }
      default:
        return state      
  }
}