const express = require("express");
const morgan = require("morgan"); 
const authController = require("./controllers/auth");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(authController);

module.exports = app;
