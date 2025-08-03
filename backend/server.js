const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const progressRoutes = require("./routes/progressRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/progress", progressRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
