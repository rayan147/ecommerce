import mongoose from 'mongoose';
import orderItemsSchema from './orderItemsSchema.js';
const { Schema } = mongoose;









const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
   orderItems: [orderItemsSchema],
   shippingAddress: {
     address: {
           type: String,
           required: true
       }, 
        country: {
           type: String,
           required: true
       },
       city: {
           type: String,
           required: true
       },
     
       zipCode: {
           type: String,
           required: true
       },
       _state: {
           type: String,
           required: true
       },
     
   },
   paymentMethod :{
        type: String,
        // required: true,
        default: 'PayPal'
   },
   paymentResult :{
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
   taxPrice :{
        type: Number,
        required: true,
        default: 0.0
   },
   shippingPrice :{
        type: Number,
        required: true,
        default: 0.0
   },
   totalPrice :{
        type: Number,
        required: true,
        default: 0.0
   },
   isPaid :{
        type: Boolean,
        required: true,
        default: false
   },
   paidAt :{
      type:  Date
   },
   isDelivered:{
        type: Boolean,
        required: true,
        default: false
   },
   deliveredAt :{
    type: Date
 },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},{
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

export default Order;