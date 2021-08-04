const notFound = (req,res,next) => { 
    const err = new Error(`Not Found at ${req.originalUrl}`);
    res.status(404);
    next(err);
}

export default notFound;