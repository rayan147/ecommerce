import PRODUCT_CONSTANTS from "../../constants/productConstants"
const{
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAILURE,
    PRODUCT_UPDATE_RESET

}=PRODUCT_CONSTANTS 


const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true }
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case PRODUCT_UPDATE_FAILURE:
        return { loading: false, error: action.payload }
      case PRODUCT_UPDATE_RESET:
        return { product: {} }
      default:
        return state
    }
  }
  export default productUpdateReducer 