const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 5000;

const mongoDB = require("./db");
mongoDB();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Test Features!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
