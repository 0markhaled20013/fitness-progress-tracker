const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now, required: true },
    reps: { type: Number, required: true, min: 0 },
    calories: { type: Number, required: true, min: 0 },
    weight: { type: Number, required: true, min: 0 },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

module.exports = mongoose.model("Progress", progressSchema);
