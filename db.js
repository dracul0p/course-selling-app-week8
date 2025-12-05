const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const  User = new Schema({
   email : {type: String, unique: true},
   password : String,
   name : String
  
})

const Course = new Schema({
   
})