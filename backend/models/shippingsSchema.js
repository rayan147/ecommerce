import mongoose from 'mongoose';
const { Schema } = mongoose;


const shippingsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {timestamps: true});
export default shippingsSchema