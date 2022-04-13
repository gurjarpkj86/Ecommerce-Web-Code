const ErrorHander = require("../utils/errorhander");

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong MongoDB Id Error
    if(err.name === 'CastError'){
        const message = `Rasource not found. Invalid: ${err.path} `;
        err = new ErrorHander(message,400);
    }

    // Mongoose Duplicate Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHander(message,400);
    }

    // Wrong JWT Error
    if(err.code === "JsonWebTokenError"){
        const message = `Json Web Token is invalid, try again `;
        err = new ErrorHander(message,400);
    }

    // JWT Expire Error
    if(err.code === "TokenExpiredError"){
        const message = `Json Web Token is Expired, try again `;
        err = new ErrorHander(message,400);
    }

    res.status(err.statusCode).json({
        success : false,
        message : err.message,
    });
};