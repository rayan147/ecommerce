import PRODUCT_CONSTANTS from '../../constants/productConstants'
const {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  
} = PRODUCT_CONSTANTS
 const productListReducer = (state = {products:[]}, action) => {
  switch (action.type) { 
      case  PRODUCT_LIST_REQUEST:
          return { ...state, isLoading: true } 
      case  PRODUCT_LIST_SUCCESS:
          return { ...state, isLoading: false, products: action.payload }
      case  PRODUCT_LIST_FAILURE:
            return { ...state, isLoading: false, error: action.payload }
      default:
        return state      
  }
}
export default productListReducer