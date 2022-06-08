let express = require('express');
const res = require('express/lib/response');
let app = express();






app.get('/',function (req,res){
    res.send("Hello Express")
})
console.log("Hello World")






























 module.exports = app;
