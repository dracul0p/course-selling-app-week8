// const express = require("express");
// const router = express.Router();

const {Router} = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  console.log("REQ BODY:", req.body); // check what Express sees
    const { email, password, name } = req.body;

    console.log(email);

    res.json({
         ans : req.body,
      msg: "User signed up successfully",
    });
  });

  userRouter.post("/signin", (req, res) => {
    console.log("REQ BODY:", req.body); // check what Express sees
    const { email, password, name } = req.body;

    console.log(email);

    res.json({
      ans : req.body,
      msg: "User signed in successfully",
    });
  });

  // all user purchased courses
  userRouter.get("/purchases", (req, res) => {
    res.json({
      msg: "User purchased courses now",
    });
  });

module.exports = {
  userRouter: userRouter,
}


/*
function userRoutes(app) {
  app.post("/signup", (req, res) => {
    const { email, password, name } = req.body;

    console.log(email);

    res.json({
      msg: "User signed up successfully",
    });
  });

  app.post("/signin", (req, res) => {
    const { username, password } = req.body;
  });

  // all user purchased courses
  app.get("/purchases", (req, res) => {
    res.json({
      msg: "User purchased courses",
    });
  });
}


module.exports = {
  userRoutes: userRoutes,
};

*/


