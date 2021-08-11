import {USER_CONSTANTS} from '../../constants/userContants'
const  {
USER_UPDATE_PROFILE_REQUEST,
USER_UPDATE_PROFILE_FAILURE,
USER_UPDATE_PROFILE_SUCCESS,
USER_UPDATE_PROFILE_RESTORE_REQUEST

} = USER_CONSTANTS
const userUpdateProfileReducer = (state = { } , action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                isUpdatingProfile: true
            }
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isUpdatingProfile: false,
                success:true,
                userInfo: action.payload,
                error: null
            }
        
        case USER_UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                isUpdatingProfile: false,
                success:false,
                error: action.payload
            }
            
        case USER_UPDATE_PROFILE_RESTORE_REQUEST:
            return { }
        default:
            return state
          
    }}
export default userUpdateProfileReducer