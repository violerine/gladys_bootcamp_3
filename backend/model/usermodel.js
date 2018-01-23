const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/projectbc3")

const schema = mongoose.Schema;

const userSchema = new schema({
    username : String,
    password : String
})

const user = mongoose.model("projectbc3user",userSchema)

module.exports = user