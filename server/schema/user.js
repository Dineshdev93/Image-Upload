
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  user : {
    type : String,
    required : true
  },
  imagepath : {
    type : String,
    required : true
  },
  desi : {
    type : String,
    required : true
  }
})

module.exports = mongoose.model("images",userSchema)