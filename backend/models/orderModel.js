import mongoose from 'mongoose';
import shippingsSchema from './shippingsSchema.js';
import orderItemsSchema from './orderItemsSchema.js';
import paymentResultsSchema  from './paymentResultsSchema.js';
const { Schema } = mongoose;









const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
   orderItems: [orderItemsSchema],
   shippingsAdress: shippingsSchema,
   paymentMethod :{
        type: String,
        required: true
   },
   paymentResult :paymentResultsSchema,
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
      type: Date
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