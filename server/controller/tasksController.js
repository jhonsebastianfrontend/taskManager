const { taskDb } = require("../data/taskDb");

let tasks = taskDb;

const getTasks = (req, res) => {
  return res.json({
    status: "ok",
    tasks,
  });
};

const createTask = (req, res) => {
  const id = tasks.length + 1;
  const task = req.body
  const newTask = {...task, id: id};
  tasks.push(newTask);
  return res.json({
    status: "ok",
    tasks,
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const updatedTasks = tasks.filter((task) => task.id !== id);
  tasks = updatedTasks
  return res.json({
    status: "ok",
    tasks: updatedTasks,
  });
};

const editTask = (req, res) => {
  const updatedData = req.body;
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) return null;

  tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
  res.json({
    status: "ok",
    tasks,
  });
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  editTask,
};
