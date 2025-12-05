const Router = require("express").Router;

const adminRouter = Router();



// Create a new course
adminRouter.post("/signup", (req, res) => {
   console.log("REQ BODY:", req.body); // check what Express sees
    const { email, password, name } = req.body;

    console.log(email);

    res.json({
         ans : req.body,
      msg: "User signed up successfully",
    });
});

adminRouter.post("/signin", (req, res) => {
  const { username, password } = req.body;
});

//create a course
adminRouter.post("/course", (req, res) => {
  const { username, password } = req.body;
});

//change price and image of course or content.
adminRouter.put("/course", (req, res) => {
  const { username, password } = req.body;
});

//get all courses i have created
adminRouter.get("/course/bulk", (req, res) => {
    res.json({ msg: "All courses created by admin" });
});

module.exports = {
  adminRouter: adminRouter,
}