const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')


//routes
app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')       --get all the tasks
// app.post('/api/v1/tasks')      --create a new tasks
// app.get('/api/v1/task/:id')    --get single task
// app.patch('/api/v1/task/:id')  --update task
// app.delete('/api/v1/task/:id') --delete task

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})