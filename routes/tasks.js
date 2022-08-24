const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// app.get('/api/v1/tasks')       --get all the tasks
// app.post('/api/v1/tasks')      --create a new tasks
// app.get('/api/v1/task/:id')    --get single task
// app.patch('/api/v1/task/:id')  --update task
// app.delete('/api/v1/task/:id') --delete task

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
