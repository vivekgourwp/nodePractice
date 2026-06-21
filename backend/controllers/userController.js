const db = require("../db");

const getUsers = (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json(result);
  });
};

const storeUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(422).json({
      message: "Name is required",
    });
  }

  const sql = "INSERT INTO users (name) VALUES (?)";

  db.query(sql, [name], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.status(201).json({
      message: "User created!",
      userId: result.insertId,
    });
  });
};

module.exports = { getUsers, storeUser };