//this is our custom error handler

//@catch-all for any routes that doesn't exist
const notFound = (req,res,next) =>{
   const error = new Error(`Not found ${req.originalUrl}`);
   res.status(404)
}

const errorHandler = (err, req,res,next) =>{
    
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource Not found'
    }

    res.status(statusCode).json({
        message,
        stack : process.env.NODE_ENV ==='production' ? null : err.stack  //help you show error and line numbers   
    })
}

export { 
    notFound,
    errorHandler
}