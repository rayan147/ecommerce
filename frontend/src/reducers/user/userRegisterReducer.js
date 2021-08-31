import {USER_CONSTANTS} from '../../constants/userConstants'
const  {
USER_REGISTER_REQUEST,
USER_REGISTER_FAILURE,
USER_REGISTER_SUCCESS,

} = USER_CONSTANTS
const userRegisterReducer = (state = { } , action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                isRegistering: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                userInfo: action.payload,
                error: null
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                userInfo: null,
                error: action.payload
            }
            
    
        default:
            return state
          
    }}
export default userRegisterReducer