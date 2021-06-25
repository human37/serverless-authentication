const mongoose = require("mongoose");
const db = mongoose.connection;

function connect(){
    let connectionString = `mongodb+srv://DawsonNielson:Dawsonp44@cluster0.08nxx.mongodb.net/serverlessAuthentication?retryWrites=true&w=majority`;
    console.log("connect to db....");
    mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err)=>{
        console.log(err);
    });
}

function onConnect(callback){
    db.once("open",callback);
}

module.exports = {
    connect,
    onConnect,
};