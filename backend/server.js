require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const healthRoutes = require("./routes/healthRoutes");
const todoRoutes = require('./routes/todoRoutes');
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(express.json());
app.use("/users", userRoutes);
app.use("/health", healthRoutes);
app.use("/api/todos",todoRoutes);
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/info", (req, res) => {
  res.json({ appName: process.env.AppName, port: process.env.PORT });
});

// Error handlar
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.code === 11000) {
    err.message = "Email already exists";
    err.statusCode = 400;
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((el) => el.message);
    err.message = messages.join(". ");
    err.statusCode = 400;
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running on port ",process.env.PORT );
    });
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
    process.exit(1); // app ko crash kara do, kyunki DB ke bina app useless hai
  });

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error (after initial connect):", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

