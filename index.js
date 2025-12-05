const { log } = require("console");
const express = require("express");

const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
// const {courseRoutes} = require("./routes/course");
// const {userRoutes} = require("./routes/user");

const app = express();
const PORT = 3000;

// Middleware (to read JSON request body)
app.use(express.json());

app.use("/api/v1/admin", adminRouter);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

// courseRoutes(app);
// userRoutes(app);

// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
