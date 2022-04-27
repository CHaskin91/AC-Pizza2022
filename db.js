const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Chaskin91:Chubbs09@cluster0.venbc.mongodb.net/AC_Pizza_DB";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connection Successful");
});

db.on("error", () => {
  console.log("MongoDB Connection Failed");
});

module.exports = mongoose;
