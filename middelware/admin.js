const jwt = require("jsonwebtoken");

const { JWT_ADMIN_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  try {
    const token = req.headers.token;
    const response = jwt.verify(token, JWT_ADMIN_SECRET);

    if (response) {
      req.adminId = response.id;
      next();
    } else {
      res.status(403).json({
        message: "Incorrect creds",
      });
    }
  } catch (err) {
    res.status(403).json({msg : "Invalid token", error: err.message});
  }
}

module.exports = {
  adminMiddleware,
};
