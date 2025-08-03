const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://omarkhaled:jADYSu6fXZgSrWtM@cluster0.2wcdtmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};

module.exports = connectDB;
