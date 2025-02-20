const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  username: String,
  score: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 }
})

module.exports = mongoose.model("User", UserSchema)