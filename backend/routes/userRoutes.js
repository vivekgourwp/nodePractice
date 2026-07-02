const express = require("express");
const router = express.Router();


const { getAllUsers, getUserById,getUserByEmail, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/email/:email', getUserByEmail);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;