import INTERNAL_STATE from '../../constants/internalState'

const {
    NAME,
    EMAIL,
    PASSWORD,
    CONFIRM_PASSWORD,
    ERROR_MESSAGE
} = INTERNAL_STATE
const reducer = (state, action) => {
    switch (action.type) {
      case NAME:
        return {...state,name:action.payload}
    case EMAIL:
        return {...state,email:action.payload}
    case PASSWORD:
        return {...state,password:action.payload}
    case CONFIRM_PASSWORD:
        return {...state,confirmPassword:action.payload}
      case ERROR_MESSAGE:
        return {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          errorMessage: action.errorMessage
        }
      default:
        return state
    }
  }
  export default reducer