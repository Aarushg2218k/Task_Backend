const express = require("express");
const { addTask, viewTasks, updateTask, deleteTask } = require("../controllers/TaskController");

const router = express.Router();

router.post("/tasks", addTask);
router.get("/tasks", viewTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
