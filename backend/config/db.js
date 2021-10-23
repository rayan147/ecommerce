import mongoose from 'mongoose';

const db = () =>{
    const connectMongo = async (connectionString) => {
        try {
            const conn = await mongoose.connect(connectionString,{
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
    const disconnectMongo = async () => {
        try {
            await mongoose.connection.dropDatabase();
            await mongoose.connection.close();
            console.log('Disconnected from MongoDB'.yellow.bold);
        }
        catch (err) {
            console.error(`Err :${err.message}`.red.underline);
            process.exit(1);
        }
    };
    
    const clearMongo = async () => {
        try {
            await mongoose.connection.dropDatabase();
            console.log('Cleared MongoDB'.yellow.bold);
        }
        catch (err) {
            console.error(`Err :${err.message}`.red.underline);
            process.exit(1);
        }
    };
    return {
        connectMongo,
        disconnectMongo,
        clearMongo
    };
}



export default  db