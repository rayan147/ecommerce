import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://produce:produce@produce.yiddo.mongodb.net/products?retryWrites=true',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
            );
            console.log(`Connected to MongoDB ${conn.connection.host}`.yellow.bold);
    }
    
    catch (err) {
        console.error(`Err :${err.message}`.red.underline);
        process.exit(1);
    }
};
export default connectMongo;