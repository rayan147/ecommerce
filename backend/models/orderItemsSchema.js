import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderItemsSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
}, {timestamps: true});

export default orderItemsSchema