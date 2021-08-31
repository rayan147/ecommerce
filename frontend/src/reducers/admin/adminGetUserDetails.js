import ADMIN_CONSTANTS from "../../constants/adminConstants"

const  {
    ADMIN_USER_DETAILS_REQUEST,
    ADMIN_USER_DETAILS_FAILURE,
    ADMIN_USER_DETAILS_SUCCESS,
    ADMIN_USER_DEATAILS_RESET
    } = ADMIN_CONSTANTS

const adminGetDetailsReducer = (state = {user:{} } , action) => {
    switch (action.type) {
        case ADMIN_USER_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ADMIN_USER_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            }
        case ADMIN_USER_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: {},
                error: action.payload
            }
            
        case ADMIN_USER_DEATAILS_RESET:
            return {
                ...state,
                isLoading: false,
                user: {},
                error: null
            }
        default:
            return state
          
    }}
export default adminGetDetailsReducer