import ADMIN_CONSTANTS from '../../constants/adminConstants'
const {
    ADMIN_USER_LIST_REQUEST,
    ADMIN_USER_LIST_SUCCESS,
    ADMIN_USER_LIST_FAILURE,
    ADMIN_USER_LIST_RESET
} = ADMIN_CONSTANTS;


const adminGetUsersListReducer = (state = {users:[]}, action) => {
    switch (action.type) {
        case ADMIN_USER_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ADMIN_USER_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                users: action.payload
            };
        case ADMIN_USER_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case ADMIN_USER_LIST_RESET:
            return {
                ...state,
                isLoading: false,
                error: null,
                users: []
            };
        default:
            return state;
    }
}
export default adminGetUsersListReducer;