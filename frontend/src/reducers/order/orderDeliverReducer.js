
import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_SUCCESS,
    ORDER_DELIVER_FAILURE,
    ORDER_DELIVER_RESET
    
} = ORDER_STATUS;   

 const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_DELIVER_REQUEST:
        return {
          loading: true,
        }
      case ORDER_DELIVER_SUCCESS:
        return {
          loading: false,
          success: true,
        }
      case ORDER_DELIVER_FAILURE:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDER_DELIVER_RESET:
        return {}
      default:
        return state
    }
  }

  export default orderDeliverReducer
  