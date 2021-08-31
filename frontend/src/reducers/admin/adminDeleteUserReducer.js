import ADMIN_CONSTANTS from '../../constants/adminConstants'
const {
    ADMIN_USER_DELETE_REQUEST,
    ADMIN_USER_DELETE_SUCCESS,
    ADMIN_USER_DELETE_FAILURE
} = ADMIN_CONSTANTS;

const adminDeleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_USER_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADMIN_USER_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                user: action.payload
            }
        case ADMIN_USER_DELETE_FAILURE:
            return {
                ...state,
                isLoading: false,
                success: false,
                error: action.payload
            }    
            
     
    
        default:
           return state
    }
}

export default adminDeleteUserReducer