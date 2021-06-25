const mongoose = require("mongoose");

const hashSchema = mongoose.Schema({
    userID: String,
    password: String
});

const user = mongoose.model("user", hashSchema);

module.exports = user;