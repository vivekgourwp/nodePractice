const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello welcome to the Express Basics");
});

// Custom middleware
function requestLogger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next(); // IMPORTANT: warna request yahi atak jayegi
}

app.use(requestLogger); // sabhi routes ke liye apply hoga

app.use("/about/:id", (req, res) => {
  res.send("Hello this is a about page code");
});



app.get("/about/admin", (req, res) => {
  res.send("Hello code 2");
});

app.get("/contact", (req, res) => {
    const data = [{email:"lorem@gmail.com",phone:'7745941010'}] 
    res.json(data);
});

app.get("/users", (req, res) => {
    const data = [{id:2,name:'Vivek gour'}] 
    res.json(data);
});



app.listen(3000, () => {
  console.log("Server start on the 3000 port");
});
