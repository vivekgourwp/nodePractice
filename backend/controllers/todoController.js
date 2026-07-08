// controllers/todoController.js
const Todo = require("../models/todoModels");
const catchAsync = require("../utils/catchAsync");

exports.createTodo = catchAsync(async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title,
    user: req.user._id,
  });

  res.status(201).json({
    status: "success",
    todo,
  });
});

exports.getAllTodos = catchAsync(async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });

  res.status(200).json({
    status: "success",
    todos,
  });
});

exports.getTodoById = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });

  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  res.status(200).json({
    status: "success",
    todo,
  });
});

exports.UpdateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });

  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  Object.assign(todo, req.body);
  await todo.save();

  res.status(200).json({ status: "success", data: todo });
});

exports.DeleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });

  if (!todo) {
    return next(new AppError("Todo not found", 404));
  }

  res.status(200).json({ status: "success", data: null });
});
