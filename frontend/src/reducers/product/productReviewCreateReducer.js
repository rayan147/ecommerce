import PRODUCT_CONSTANTS from "../../constants/productConstants"
const{
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAILURE,
    PRODUCT_CREATE_REVIEW_RESET

}=PRODUCT_CONSTANTS 
 
 
 const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_CREATE_REVIEW_REQUEST:
        return { loading: true }
      case PRODUCT_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case PRODUCT_CREATE_REVIEW_FAILURE:
        return { loading: false, error: action.payload }
      case PRODUCT_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }

export default productReviewCreateReducer