const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(bodyParser.json());

//routes
app.use("/api/v1/tasks", tasks);

//start api
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

//start server and db
start();
