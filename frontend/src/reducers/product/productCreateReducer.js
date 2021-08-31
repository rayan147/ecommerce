 import PRODUCT_CONSTANTS from "../../constants/productConstants"
 const{
     PRODUCT_CREATE_FAILURE,
     PRODUCT_CREATE_RESET,
     PRODUCT_CREATE_REQUEST,
     PRODUCT_CREATE_SUCCESS
 }=PRODUCT_CONSTANTS
 
 const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
        return { loading: true }
      case PRODUCT_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case PRODUCT_CREATE_FAILURE:
        return { loading: false, error: action.payload }
      case PRODUCT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  export default productCreateReducer