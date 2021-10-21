import User from '../models/userModel.js'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'


const mongoMethods = () =>{
    const findUserByEmail = async(email) => {
        return await User.findOne({email}).select('+password')
    }
    return{
       findUserByEmail 
    }
}

export default mongoMethods