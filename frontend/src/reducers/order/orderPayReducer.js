import ORDER_STATUS from "../../constants/orderConstants";

const {
  ORDER_PAYMENT_FAILURE,
  ORDER_PAYMENT_SUCCESS,
  ORDER_PAYMENT_REQUEST_START,
  ORDER_PAYMENT_RESET
} = ORDER_STATUS;

const orderPayReducer = (state = {  } , action) => {
 
    switch (action.type) {
        case ORDER_PAYMENT_REQUEST_START:
            return {
                ...state,
                isLoading: true
            };
        case ORDER_PAYMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                orderPayStatus: action.payload,
                error: null
            };
        case ORDER_PAYMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                orderPayStatus: null,
                error: action.payload
            };
        case ORDER_PAYMENT_RESET:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                orderPayStatus: null,
                error: null
            };
           
    
        default:
            return state;
            
    }
}
export default orderPayReducer;