const mongoose = require("mongoose");
const { DB } = require("../config");
connectDB = async () => {
  try {
    await mongoose.connect(DB, { useNewUrlParser: true });
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection failed", error);
  }
};

module.exports = connectDB;
