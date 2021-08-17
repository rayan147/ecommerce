
import ORDER_STATUS from "../../constants/orderContants";

const {
   ORDER_DETAIL_FAILURE,
   ORDER_DETAIL_REQUEST_START,
   ORDER_DETAIL_SUCCESS
    
} = ORDER_STATUS;

const orderDetailsReducer = (state = { orderItems:[],userShippingAddress :{}}, action) => {
        switch (action.type) {
            case ORDER_DETAIL_REQUEST_START:
                return {
                    ...state,
                    isFetching: true,
                    isFetchingRequest: true,
                    isFetchingRequestSuccess: false,
                    isFetchingRequestFailure: false,
                    isFetchingRequestStart: true,
                };
          
            case ORDER_DETAIL_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    isFetchingRequest: false,
                    isFetchingRequestSuccess: false,
                    isFetchingRequestFailure: true,
                    isFetchingRequestStart: false,
                    error:action.payload
                };
            case ORDER_DETAIL_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    isFetchingRequest: false,
                    isFetchingRequestSuccess: true,
                    isFetchingRequestFailure: false,
                    isFetchingRequestStart: false,
                    order: action.payload
                };
            
            default:
                return state;
            
}
};
export default orderDetailsReducer;