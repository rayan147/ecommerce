import mongoose from 'mongoose';
const { Schema } = mongoose;


const shippingSchema = new Schema({
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
  
}, {timestamps: true});
export default shippingSchema