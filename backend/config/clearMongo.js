
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
export default clearMongo;