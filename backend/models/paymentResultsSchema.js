import mongoose from 'mongoose';
const { Schema } = mongoose;


const paymentResultsSchema = new Schema({
    id: {type: String},
    status: {type: String},
    update_time: {type: String},
    email_address: {type: String}
}, {timestamps: true});
export default spaymentResultsSchema