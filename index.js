const express = require("express")
const http = require('http');
   
// const hostname = 'http://9410-129-45-20-109.ngrok.io';
// const hostname = '127.0.0.1 ' 

// const ngrok = require('ngrok');
const port = 8083;

var app = express()

app.get("/",async function(req,res,next){
    res.sendfile(__dirname + '/index.html');
})
app.listen(8083, function () {
console.log("Started application on port %d", 8083)
});
app.get("/sleep",async function(req,res,next){
    res.sendfile(__dirname + '/sleep.html');console,console.log(success);
})
app.get("/changeVideo",async function(req,res,next){
    res.sendfile(__dirname + '/changeVideo.html');
})

app.use(express.static(__dirname + '/public'));

