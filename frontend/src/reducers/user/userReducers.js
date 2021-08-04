import {USER_CONSTANTS} from '../../constants/userContants'
const  {
USER_LOGIN_REQUEST,
USER_LOGIN_FAILURE,
USER_LOGIN_SUCCESS
} = USER_CONSTANTS

const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {    
                ...state,
                isLoading: true,
                isAuthenticated: false,
                error: null,
            }
        case USER_LOGIN_SUCCESS:
            return {    
                ...state,
                isLoading: false,
                isAuthenticated: true,
                userInfo: action.payload,
                error: null,
            }
        case USER_LOGIN_FAILURE:
            return {    
                ...state,
                isLoading: true,
                isAuthenticated: false,
                error: action.payload,
            }
    
        default:
            return state
       
    }
}
export default userLoginReducer