import {USER_CONSTANTS} from '../../constants/userConstants'
const  {
USER_LOGIN_REQUEST,
USER_LOGIN_FAILURE,
USER_LOGIN_SUCCESS,
USER_LOGOUT_SUCCESS
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
                isLoading: false,
                isAuthenticated: false,
                userInfo: null,
                error: action.payload,
            }

        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                userInfo: null,
                error: null,
            }
    
        default:
            return state
       
    }
}
export default userLoginReducer