const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/simplejwt", { useNewUrlParser: true })
  .then(() => console.log("DataBase is connected!"));
