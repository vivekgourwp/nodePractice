const express = require("express");
const router = express.Router();

const { getUsers, storeUser } = require("../controllers/userController");

router.get("/users", getUsers);
router.post("/users", storeUser);

module.exports = router;