import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAILURE,
    ORDER_LIST_MY_RESET
}=ORDER_STATUS
    
 
 const orderListMyReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case ORDER_LIST_MY_REQUEST:
        return {
          loading: true,
        }
      case ORDER_LIST_MY_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        }
      case ORDER_LIST_MY_FAILURE:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDER_LIST_MY_RESET:
        return { orders: [] }
      default:
        return state
    }
  }
  export default orderListMyReducer