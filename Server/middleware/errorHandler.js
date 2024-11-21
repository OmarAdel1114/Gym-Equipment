const errorHandler = (error , req , res ,next,statusCode)=>{
    res.status(statusCode).json(error.message)
}

module.exports = errorHandler;