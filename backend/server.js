require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// const db = require('./db');
const userRoutes = require("./routes/userRoutes");
const healthRoutes = require("./routes/healthRoutes");
const cors = require("cors");
// db();


const app = express();
app.use(cors({
  origin:'http://localhost:3000'
}));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/health",healthRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/info", (req, res) => {
  res.json({appName: process.env.AppName,port: process.env.DB_PORT});
});

app.listen(process.env.DB_PORT, () => {
  console.log("Server running on port 5000");
});