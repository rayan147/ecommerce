import {CART_TYPES_CHOICES} from "../../constants/cartConstants"
const {CART_ADD_TO_CART, CART_REMOVE_FROM_CART} = CART_TYPES_CHOICES

 const cartReducer = (state = {cartItems:[]}, action) => {  
      switch (action.type) {
        case CART_ADD_TO_CART:
           const item = action.payload
      const existItem = state.cartItems.find((x) => x.product_id === item.product_id)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product_id === existItem.product_id ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
      case CART_REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product_id !== action.payload),
        }
        default:
            return state;
      }
}
export default cartReducer
