const { GetTaskModel } = require("../Modal/Task"); // Assuming your model is in taskModel.js
const Task = GetTaskModel();

// Add a new task
const addTask = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const newTask = new Task({ name, description, status });
    await newTask.save();
    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    res.status(400).json({ message: "Failed to add task", error: error.message });
  }
};

// View all tasks
const viewTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks", error: error.message });
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { name, description, status },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    res.status(400).json({ message: "Failed to update task", error: error.message });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task", error: error.message });
  }
};

module.exports = {
  addTask,
  viewTasks,
  updateTask,
  deleteTask,
};
