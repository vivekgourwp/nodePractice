const db = require("../db");
 const AppError = require('../utils/AppError');
// Dummy users array (database ki jagah temporary)
let users = [
  { id: 1, name: "Vivek", email: "vivek@test.com" },
  { id: 2, name: "Rahul", email: "rahul@test.com" }
];

exports.getAllUsers = (req, res, next) => {
  if (!user) throw new AppError("User not found2", 404);
  res.status(200).json(users);
};

exports.getUserById = (req, res, next) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

 if (!user) throw new AppError("User not found2", 404);
  res.status(200).json(user);
};