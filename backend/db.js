const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI;

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoURI, async (err, res) => {
    if (err) {
      console.log("DB Not connected!");
    } else {
      console.log("DB Connected!");
    }
  });
};

module.exports = mongoDB;
