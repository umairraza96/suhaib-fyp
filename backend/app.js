const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { DB, PORT } = require("./config");
const bodyParser = require("body-parser");
connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection failed", error);
  }
};

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const User = require("./models/user_model");
app.use("/api", require("./routes/user_routes"));

app.get("/api", (req, res) => {
  res.status(200).json("Hello World");
});

app.listen(PORT, () => {
  console.log("Server Started at port:", PORT);
});
