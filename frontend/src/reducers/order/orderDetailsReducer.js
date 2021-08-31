
import ORDER_STATUS from "../../constants/orderConstants";

const {
   ORDER_DETAILS_FAILURE,
   ORDER_DETAILS_REQUEST_START,
   ORDER_DETAILS_SUCCESS
    
} = ORDER_STATUS;

const orderDetailsReducer = (state = { isLoading: true,orderItems:[],shippingAddress :{}}, action) => {
        switch (action.type) {
            case ORDER_DETAILS_REQUEST_START:
                return {
                    ...state,
                    isLoading: true,
                    
                };
          
            case ORDER_DETAILS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error:action.payload
                };
            case ORDER_DETAILS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    order: action.payload
                };
            
            default:
                return state;
            
}
};
export default orderDetailsReducer;