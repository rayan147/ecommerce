
import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_CREATE_FAILURE,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST
    
} = ORDER_STATUS;

const orderCreateReducer = (state = {}, action) => {
        switch (action.type) {
            case ORDER_CREATE_REQUEST:
                return {
                    ...state,
                    isFetching: true,
                    isFetchingRequest: true,
                    isFetchingRequestSuccess: false,
                    isFetchingRequestFailure: false,
                    isFetchingRequestStart: true,
                };
          
            case ORDER_CREATE_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    isFetchingRequest: false,
                    isFetchingRequestSuccess: false,
                    isFetchingRequestFailure: true,
                    isFetchingRequestStart: false,
                    error:action.payload
                };
            case ORDER_CREATE_SUCCESS:
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
export default orderCreateReducer;