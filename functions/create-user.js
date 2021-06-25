let crypto = require('crypto');

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event) {
  const { username, password } = JSON.parse(event.body);
  let salt = "oogabooga"
  password = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ username, password }),
  };
};
