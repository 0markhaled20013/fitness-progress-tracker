const mongoose = require("mongoose");

// Middleware to check if MongoDB is connected
function checkDbConnection(req, res, next) {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: "Service unavailable: Database not connected",
    });
  }
  next();
}

module.exports = checkDbConnection;
