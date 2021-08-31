import {USER_CONSTANTS} from '../../constants/userConstants'
const  {
USER_DETAILS_REQUEST,
USER_DETAILS_FAILURE,
USER_DETAILS_SUCCESS,
USER_DEATAILS_RESET

} = USER_CONSTANTS
const userDetailsReducer = (state = {user:{} } , action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            }
        case USER_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: {},
                error: action.payload
            }
            
        case USER_DEATAILS_RESET:
            return {
                ...state,
                isLoading: false,
                user: {},
                error: null
            }
        default:
            return state
          
    }}
export default userDetailsReducer