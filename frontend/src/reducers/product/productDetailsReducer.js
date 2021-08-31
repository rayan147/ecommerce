import PRODUCT_CONSTANTS from '../../constants/productConstants'
const {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS
} = PRODUCT_CONSTANTS

 const productDetailsReducer = (state = {product:{reviews:[]}}, action) => {
  switch (action.type) { 
      case  PRODUCT_DETAILS_REQUEST:
          return { ...state, isLoading: true } 
      case  PRODUCT_DETAILS_SUCCESS:
          return { ...state, isLoading: false, product: action.payload }
      case  PRODUCT_DETAILS_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
      default:
        return state      
  }
}
export default productDetailsReducer