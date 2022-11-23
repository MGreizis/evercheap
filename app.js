var express = require("express");
var cors = require('cors');
var http = require('http');
var app = express();
var fs = require("fs");


// app.use(
//    cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']})
//  );

app.use((req, res, next) => {
   res.append('Access-Control-Allow-Origin', '*');
   res.append('Access-Control-Allow-Headers', 'Content-Type');
   res.set('Access-Control-Expose-Headers', '*')
   next();
 })

// endpoint
app.listen(3003, () => {

 console.log("Server running on port 3003");
});

app.get('/listStores', function (req, res) {
    fs.readFile(__dirname + "/API" + "/" + "stores.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

 app.get('/exit', function (req, res) {
    fs.readFile( __dirname + "/" + "schools.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
