const { log } = require("console");
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware (to read JSON request body)
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
});


app.post("/user/signup", (req, res) => {
  const { email, password, name } = req.body;

  console.log(email);

  res.json({
    msg: "User signed up successfully",
  });
});

app.post("/user/signin", (req, res) => {
  const { username, password } = req.body;
});


// all user purchased courses
app.get("/user/purchases", (req, res) => {
  res.json({
    msg: "User purchased course",
  });
});

//user purchase course  : buy course
app.post("/course/purchase", (req, res) => {
 //you would extract user to pay money
  res.json({
    msg: "User purchased course",
  });
});



app.get("/courses", (req, res) => {
   res.json({
    msg: "all cources fetched",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
