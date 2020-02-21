const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema  = new Schema({
 "title": "String",
 "releaseYear" : "String",
 "director" : "String",
 "genre" : "String"
});

const connection = mongoose.createConnection("mongodb://localhost:27017/test");
module.exports = connection.model("Movie", movieSchema);

