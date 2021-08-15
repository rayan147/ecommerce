import INTERNAL_STATE from '../../constants/internalState'

const {
    ADDRESS,
    CITY,
    COUNTRY,
    ZIP_CODE,
    STATE,
} = INTERNAL_STATE

const shippingReducer = (state ,action) => {
    switch (action.type) {
        case ADDRESS:
            return {
                ...state,
                address: action.payload,
            }
        case CITY:
            return {
                ...state,
                city: action.payload,
            }
        case COUNTRY:
            return {
                ...state,
                country: action.payload,
            }
        case ZIP_CODE:
            return {
                ...state,
                zipCode: action.payload,
            }
        case STATE:
            return {
                ...state,
                _state: action.payload,
            }
        default:
            return state
            
    }}
export default shippingReducer