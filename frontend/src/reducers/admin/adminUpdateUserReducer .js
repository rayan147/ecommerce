import ADMIN_CONSTANTS from '../../constants/adminConstants'
const {
    ADMIN_USER_UPDATE_REQUEST,
    ADMIN_USER_UPDATE_SUCCESS,
    ADMIN_USER_UPDATE_FAILURE,
    ADMIN_USER_UPDATE_RESET
} = ADMIN_CONSTANTS;


const adminUpdateUserReducer = (state={user:{}},action) =>{
    switch (action.type) {
        case ADMIN_USER_UPDATE_REQUEST:
            return{
                isLoading: true
            }
        case ADMIN_USER_UPDATE_SUCCESS:
            return{
                isLoading:false,
                isSucess:true,
                error: null
            }   
        case ADMIN_USER_UPDATE_FAILURE:
            return{
                isSucess:false,
                isLoading:false,
                error:action.payload
            }
        case ADMIN_USER_UPDATE_RESET:
            return{
                user:{}
            }
        default:
           return state
    }
}

export default adminUpdateUserReducer 