import User from '../models/userModel.js';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';

const mongoFactoryMethods = () => {
  const findUserByEmailWidthPasswordReturn = async (email) =>
    User.findOne({ email }).select('+password');
  const findUserByEmailWidthOutPasswordReturn = async (email) =>
    User.findOne({ email }).select('-password');
  const findUserByEmail = async (email) => User.findOne({ email });

  const findUserById = async (id) => User.findById(id);
  const findUserByIdAndUpdate = async (id, data) =>
    User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  const findUserByIdAndDelete = async (id) => User.findByIdAndDelete(id);
  const findAllUsers = async () => User.find({});
  const createUser = async (data) => User.create(data);
  const createProductAndAddItToMongodb = async (data) => Product.create(data);
  const findProductById = async (id) => Product.findById(id);
  const deleteProductByItsId = async (id) => Product.findByIdAndDelete(id);

  const findProductByIdAndUpdate = async (id, data) =>
    Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  const createOrderAndAddItToMongodb = async (data) => Order.create(data);
  const findAllOrders = async () => Order.find({}).populate('user', 'id name');
  const findOrderById = async (id) => Order.findById(id).populate('user', 'name email');
  const findOrderByIdAndNotPopulate = async (id) => Order.findById(id);
  const findCurrentUserOrders = async (id) => Order.find({ user: id });
  const findOrderByIdAndUpdate = async (id, data) =>
    Order.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  const findOrderByIdAndDelete = async (id) => Order.findByIdAndDelete(id);

  return Object.freeze({
    findUserByEmailWidthPasswordReturn,
    findUserByEmailWidthOutPasswordReturn,
    findOrderByIdAndNotPopulate,
    findOrderByIdAndDelete,
    findUserByEmail,
    findUserById,
    findUserByIdAndUpdate,
    findOrderByIdAndUpdate,
    createUser,
    createProductAndAddItToMongodb,
    findProductById,
    deleteProductByItsId,
    findProductByIdAndUpdate,
    findUserByIdAndDelete,
    findAllUsers,
    createOrderAndAddItToMongodb,
    findAllOrders,
    findOrderById,
    findCurrentUserOrders,
  });
};

export default mongoFactoryMethods;
