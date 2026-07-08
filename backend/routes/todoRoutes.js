const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {createTodo,getAllTodos,getTodoById,UpdateTodo,DeleteTodo} = require('../controllers/todoController');

router.use(protect);
router.post('/', createTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.put('/:id', UpdateTodo);
router.delete('/:id', DeleteTodo);
module.exports = router;
