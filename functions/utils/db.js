const mongoose = require("mongoose");
const stopIt = require("./model");
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

function addUser(userName, password){
    let createUser = {
        userID: userName,
        password: password
    };
    stopIt.create(createUser, (err)=>{
        if(err){
            return false;
        }
        return true;
    })
}

module.exports = {
    connect,
    onConnect,
    addUser,
};