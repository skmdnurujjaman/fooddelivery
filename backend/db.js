const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI;

const mongoDB = async () => {
  await mongoose.connect(mongoURI, (err, res) => {
    if (err) {
      console.log("DB Not connected!");
    } else {
      console.log("DB Connected!");
    }
  });
};

module.exports = mongoDB;
