import User from '../models/userModel.js'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'


const mongoFactoryMethods = () =>{
    const findUserByEmailWidthPasswordReturn = async(email) => {
        return await User.findOne({email}).select('+password')
    }
   const findUserByEmailWidthOutPasswordReturn = async(email) => {
        return await User.findOne({email}).select('-password')
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
    const findUserByIdAndDelete = async(id) => {
        return await User.findByIdAndDelete(id)
    }
    const findAllUsers = async() => {
        return await User.find({})
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

    const findProductByIdAndUpdate = async(id, data) => {
        return await Product.findByIdAndUpdate(id, data,{
            new: true,
            runValidators: true
            })
        }
    const createOrderAndAddItToMongodb = async(data) => {
        return await Order.create(data)
    }
    const findAllOrders = async() => {
        return await Order.find({}).populate('user', 'id name')
    }
    const findOrderById = async(id) => {
        return await Order.findById(id).populate('user','name email')
    }
    const findOrderByIdAndNotPopulate = async(id) => {
        return await Order.findById(id)
    }
    const findCurrentUserOrders = async(id) => {
        return await Order.find({user: id})
    }
    return Object.freeze({
        findUserByEmailWidthPasswordReturn,
        findUserByEmailWidthOutPasswordReturn,
        findUserByEmail,
        findUserById,
        findUserByIdAndUpdate,
        createUser,
        createProductAndAddItToMongodb,
        findProductById,
        deleteProductBy_Id,
        findProductById,
        findProductByIdAndUpdate,
        findUserByIdAndDelete,
        findAllUsers,
        createOrderAndAddItToMongodb,
        findAllOrders,
        findOrderById,
        findCurrentUserOrders
       
    })
}

export default mongoFactoryMethods