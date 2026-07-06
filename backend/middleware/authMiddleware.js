const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const User = require("../models/userModel");

const protect = catchAsync( async (req,res,next) =>{
    let token;

    // 1 Token header se nikalo
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token){
        return next(new AppError("You are not loged in. Please login.",401));
    }

    // 2 Token verify karna karo
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    // 3 User abhi bhi exist karta hai?
    const currentUser = await User.findById(decoded.id);
    if(!currentUser){
        return next(new AppError("User no longer exists.",401));
    }

    // 4 Request object mein user attach karo, aaage badho
    req.user = currentUser;
    next();
});

module.exports = protect;