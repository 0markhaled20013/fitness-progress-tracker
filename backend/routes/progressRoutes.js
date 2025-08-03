const express = require("express");
const router = express.Router();
const checkDbConnection = require("../middlewares/checkDatabaseConnection");
const {
  getAllProgress,
  addProgress,
  updateProgress,
  deleteProgress,
} = require("../controllers/progressController");

// CRUD Routes
router.get("/", checkDbConnection, getAllProgress);
router.post("/", checkDbConnection, addProgress);
router.put("/:id", checkDbConnection, updateProgress);
router.delete("/:id", checkDbConnection, deleteProgress);

module.exports = router;
