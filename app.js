const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./routes/movie");

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use("/api", movies);

module.exports = app;

