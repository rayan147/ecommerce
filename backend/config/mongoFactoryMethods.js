import User from '../models/userModel.js'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'


const mongoFactoryMethods = () =>{
    const findUserByEmailWidthPasswordReturn = async(email) => {
        return await User.findOne({email}).select('+password')
    }
    const findUserByEmail = async(email) => {
        return await User.findOne({email})
    }

    const findUserById = async(id) => {
        return await User.findById(id)
    }
    const findUserByIdAndUpdate = async(id, data) => {
        return await User.findByIdAndUpdate(id, data,{
            new: true,
            runValidators: true
          })
    }
    const createUser = async(data) => {
        return await User.create(data)
    }
    const createProductAndAddItToMongodb = async(data) => {
        return await Product.create(data)
    }
    const findProductById = async(id) => {
        return await Product.findById(id)
    }
    const deleteProductBy_Id = async(id) => {
        return await Product.findByIdAndDelete(id)
    }
    const findProductByName = async(name) => {
        const p = await Product.findOne({name})
        return p
    }
    return{
        findUserByEmailWidthPasswordReturn,
        findUserByEmail,
        findUserById,
        findUserByIdAndUpdate,
        createUser,
        createProductAndAddItToMongodb,
        findProductById,
        deleteProductBy_Id,
        findProductByName
    }
}

export default mongoFactoryMethods