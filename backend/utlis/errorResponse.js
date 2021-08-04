class ErrorResponse extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
       Error.captureStackTrace(this, this.constructor); 
    }
}


const throwError = (statusCode, message) => {
 throw new ErrorResponse(statusCode, message);
   
}   
export default throwError;