require("dotenv").config();
const mongoose = require("mongoose");

var mongoURL = process.env.REACT_APP_MONGOURL;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connection Successful");
});

db.on("error", () => {
  console.log("MongoDB Connection Failed");
});

module.exports = mongoose;
