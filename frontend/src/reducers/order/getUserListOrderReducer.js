
import ORDER_STATUS from "../../constants/orderConstants";

const {
    ORDER_USER_LIST_FAILURE,
    ORDER_USER_LIST_REQUEST_START,
    ORDER_USER_LIST_SUCCESS,
    RESET_ORDER_USER_LIST
    
} = ORDER_STATUS;   

const orderUserListReducer = (state = { myOrders:[]} , action) => {
    switch (action.type) {
        case ORDER_USER_LIST_REQUEST_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ORDER_USER_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                myOrders: action.payload  
            };
        case ORDER_USER_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                myOrders: null
            };
        case RESET_ORDER_USER_LIST:
            return {
                ...state,
                isLoading: false,
                error: null,
                myOrders: []
            };
    
        default: 
            return state;
           
    }
}

export default orderUserListReducer;