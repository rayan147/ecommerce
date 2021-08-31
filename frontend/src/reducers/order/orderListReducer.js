import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAILURE
}=ORDER_STATUS


const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case ORDER_LIST_REQUEST:
        return {
          loading: true,
        }
      case ORDER_LIST_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        }
      case ORDER_LIST_FAILURE:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }

  export default orderListReducer
  