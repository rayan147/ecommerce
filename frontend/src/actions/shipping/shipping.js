import SHIPPING_CONSTANTS from '../../constants/shippingContants'
const {CART_SAVE_SHIPPING_ADDRESS} = SHIPPING_CONSTANTS


const saveShippingAddress = (data) => dispatch=>{
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data
    })
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export default saveShippingAddress