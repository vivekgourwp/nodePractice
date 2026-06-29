const express = require("express");
const db = require('./db');
const userRoutes = require("./routes/userRoutes");
const healthRoutes = require("./routes/healthRoutes");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/health",healthRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});