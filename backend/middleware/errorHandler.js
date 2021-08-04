

const errorHandler = (err, req, res, next) => { 
        const status = res.statusCode ?? 500;
        const message = err.message ?? 'Internal Server Error';
        const stack = process.env.NODE_ENV === 'prod' ? null : err.stack
        res.status(status);
        res.json({
            message,
            stack  
        })
      
      
}

export default errorHandler
