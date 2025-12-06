const express = require("express");
const courseRouter = express.Router();

//buy a course
 courseRouter.post("/purchase", (req, res) => {
    //you would extract user to pay money
    res.json({
      msg: "User purchased course",
    });
  });
  

  //see what courses exists
  courseRouter.get("/preview", (req, res) => {
    res.json({
      msg: "all cources fetched",
    });

  });


module.exports = {
  courseRouter : courseRouter
}


/*
function courseRoutes(app) {
  //user purchase course  : buy course
  app.post("/course/purchase", (req, res) => {
    //you would extract user to pay money
    res.json({
      msg: "User purchased course",
    });
  });

  app.get("/cources", (req, res) => {
    res.json({
      msg: "all cources fetched",
    });
  });
}

module.exports = {
  courseRoutes : courseRoutes

}

*/

