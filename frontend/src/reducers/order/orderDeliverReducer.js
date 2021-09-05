
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
          isLoading: true,
        }
      case ORDER_DELIVER_SUCCESS:
        return {
          isLoading: false,
          isSucesss: true,
        }
      case ORDER_DELIVER_FAILURE:
        return {
          isLoading: false,
          error: action.payload,
        }
      case ORDER_DELIVER_RESET:
        return {}
      default:
        return state
    }
  }

  export default orderDeliverReducer
  