const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

exports.handler = async function (event) {
  return {
    statusCode: 200,
    headers,
    body: "hello this is a serverless function",
  };
};
