import PRODUCT_CONSTANTS from "../../constants/productConstants"
const{
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAILURE

}=PRODUCT_CONSTANTS 
 
 const productTopRatedReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_TOP_REQUEST:
        return { loading: true, products: [] }
      case PRODUCT_TOP_SUCCESS:
        return { loading: false, products: action.payload }
      case PRODUCT_TOP_FAILURE:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export default productTopRatedReducer