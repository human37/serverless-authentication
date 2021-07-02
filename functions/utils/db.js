const mongoose = require("mongoose");
const co = require("co");
let conn = null;
const uri =
  "mongodb+srv://DawsonNielson:Dawsonp44@cluster0.08nxx.mongodb.net/serverlessAuthentication?retryWrites=true&w=majority";

function addUser(username, password) {
  return co(function* () {
    if (conn == null) {
      conn = yield mongoose.createConnection(uri, {
        bufferCommands: false,
        bufferMaxEntries: 0,
      });
      conn.model(
        "user",
        new mongoose.Schema({
          userID: String,
          password: String,
        })
      );
    }
    let createUser = {
      userID: username,
      password: password,
    };
    let user = conn.model("user");
    user.create(createUser, (err) => {
      if (err) {
        console.log(err);
        return err;
      }
      return true;
    });
    return true;
  });
}

module.exports = {
  addUser,
};
