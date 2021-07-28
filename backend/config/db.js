import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true}
            );
            console.log(`Connected to MongoDB ${conn.connection.host}`.yellow.bold);
    }
    catch (err) {
        console.error(`Err :${err.message}`.red.underline);
        process.exit(1);
    }
};
export default connectMongo;