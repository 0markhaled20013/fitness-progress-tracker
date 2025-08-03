const Progress = require("../models/Progress");

//  * Fetch all progress records
// get req : http://localhost:5000/progress
exports.getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.find().sort({ date: -1 });
    res.json(progress);
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ message: error.message });
  }
};

//  * Add a new progress record
// post req : http://localhost:5000/progress and add json body
exports.addProgress = async (req, res) => {
  try {
    const { reps, calories, weight, date } = req.body;

    const newProgress = new Progress({
      reps,
      calories,
      weight,
      date: date ? new Date(date) : new Date(),
    });

    const savedProgress = await newProgress.save(); // Saves to DB
    console.log("added successfully");
    res.status(201).json(savedProgress);
  } catch (error) {
    console.error("Error adding progress:", error);
    res.status(400).json({ message: error.message });
  }
};

//  * Update a progress record by ID
// post req : http://localhost:5000/progress/id and add json body
exports.updateProgress = async (req, res) => {
  try {
    const { id } = req.params;
    const { reps, calories, weight, date } = req.body;

    const updatedProgress = await Progress.findByIdAndUpdate(
      id,
      {
        reps,
        calories,
        weight,
        date: date ? new Date(date) : new Date(),
      },
      { new: true, runValidators: true }
    );

    if (!updatedProgress) {
      return res.status(404).json({ message: "Progress record not found" });
    }

    res.json(updatedProgress);
  } catch (error) {
    console.error("Error updating progress:", error);
    res.status(400).json({ message: error.message });
  }
};

//  * Delete a progress record by ID
// delete req : http://localhost:5000/progress/id
exports.deleteProgress = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProgress = await Progress.findByIdAndDelete(id);

    if (!deletedProgress) {
      return res.status(404).json({ message: "Progress record not found" });
    }

    res.json({ message: "Progress record deleted successfully" });
  } catch (error) {
    console.error("Error deleting progress:", error);
    res.status(500).json({ message: error.message });
  }
};
