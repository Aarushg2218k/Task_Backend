const mongoose = require("mongoose");

function GetTaskModel() {
  const taskSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      status: { type: String, enum: ["pending", "completed"], default: "pending" },
    },
    {
      versionKey: false, // to avoid __v field in the table by default
    }
  );

  // Updated the collection name to "Tasks"
  const Task = mongoose.model("Tasks", taskSchema);
  return Task;
}

module.exports = { GetTaskModel };
