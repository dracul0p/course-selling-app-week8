const Router = require("express").Router;

const {adminModel} = require("../db");

const adminRouter = Router();
const bcrypt = require("bcrypt");

// Create a new course
adminRouter.post("/signup", async (req, res) => {
   console.log("REQ BODY:", req.body); // check what Express sees
    const { email, password, firstname , lastname } = req.body;

    // console.log(email);

    if(!email || !password || !firstname || !lastname){
      return res.status(400).json({msg : "Missing parameters"});
    }

    const oldAdmin = await adminModel.findOne({email});
    if(oldAdmin){
      return res.status(400).json({msg : "Admin already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newAdmin = await adminModel.create({
      email,
      password : hashedPassword,
      firstname ,
      lastname
    })



    res.json({
      
      msg: "admin signed up successfully",
      admin: {
        id: newAdmin._id,
        firstname: newAdmin.firstname,
        lastname: newAdmin.lastname,
        email: newAdmin.email,
      },
    });

});

adminRouter.post("/signin", (req, res) => {
  const { username, password } = req.body;
});

//create a  new course
adminRouter.post("/course", (req, res) => {
  const { username, password } = req.body;
});

//update exixting course  || change price and image of course or content.
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