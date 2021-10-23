import mongoFactoryMethods from "../config/mongoFactoryMethods.js";


const exposeDatabase = (req, res, next) => {
    req.db = mongoFactoryMethods();
    next();
}
export default exposeDatabase;