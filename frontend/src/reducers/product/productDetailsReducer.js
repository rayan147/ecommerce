import {PRODUCT_TYPE_CHOICES} from '../../constants/productContants'
const {
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS
} = PRODUCT_TYPE_CHOICES

 const productDetailsReducer = (state = {product:{reviews:[]}}, action) => {
  switch (action.type) { 
      case  PRODUCT_DETAIL_REQUEST:
          return { ...state, isLoading: true } 
      case  PRODUCT_DETAIL_SUCCESS:
          return { ...state, isLoading: false, product: action.payload }
      case  PRODUCT_DETAIL_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
      default:
        return state      
  }
}
export default productDetailsReducer