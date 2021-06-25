let crypto = require("crypto");
let { addUser } = require("./utils/db");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event) {
  let { username, password } = JSON.parse(event.body);
  let salt = "oogabooga";
  password = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  // adds it to mongoDB
  console.log(addUser(username, password));
  return {
    statusCode: 201,
    headers,
    body: JSON.stringify("successfully created: " + username),
  };
};
