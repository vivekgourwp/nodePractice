const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const generateToken = require("../utils/generateToken");

// REGISTER
exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  // User.create() → pre-save hook automatically password hash karega
  const newUser = await User.create({ name, email, password });

  const token = generateToken(newUser._id);

  // Password response mein kabhi mat bhejo
  newUser.password = undefined;

  res.status(201).json({
    status: "success",
    token,
    data: { user: newUser },
  });
});

// LOGIN
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Email aur password diye hain ya nahi
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  // 2) User dhoondo — password field explicitly select karna hoga
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 3) Password compare karo
  const isPasswordCorrect = await user.comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // 4) Sab sahi → token bhejo
  const token = generateToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});