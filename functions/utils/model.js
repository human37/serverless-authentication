const mongoose = require("mongoose");

const hashSchema = mongoose.Schema({
    userID: String,
    password: String
});

const stopIt = mongoose.model("stopIt", hashSchema);

module.exports = stopIt;