import User from '../models/userModel.js'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'


const mongoMethods = () =>{
    const findUserByEmailWidthPasswordReturn = async(email) => {
        return await User.findOne({email}).select('+password')
    }
    const findUserByEmail = async(email) => {
        return await User.findOne({email})
    }

    const findUserById = async(id) => {
        return await User.findById(id)
    }
    return{
        findUserByEmailWidthPasswordReturn,
        findUserByEmail,
        findUserById,
    }
}

export default mongoMethods