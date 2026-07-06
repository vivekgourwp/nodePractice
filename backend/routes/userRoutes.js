const express = require("express");
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getUserProfile} = require('../controllers/userController');

const { getAllUsers, getUserById,getUserByEmail, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { register, login } = require("../controllers/authController");
router.get('/profile',protect,getUserProfile);
router.post('/', createUser);
router.use(protect);
router.get('/', getAllUsers);
router.get('/email/:email', getUserByEmail);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;