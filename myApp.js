require('dotenv').config()
let express = require('express');
const res = require('express/lib/response');
let app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use("/public",express.static(__dirname+'/public'))


absolutePath=__dirname+'/views/index.html';

app.use(function middleware(req,res,next){
    console.log(req.method+" "+req.path+" - "+req.ip);
      next();
  })


  app.get("/",(req,res)=>{
      res.sendFile(absolutePath)
  })

app.get('/json',function (req,res){
    console.log(process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE==="uppercase"){
        res.json({
            message:"HELLO JSON"
        })
    }else{
        res.json({
            message:"Hello json"
        })
    }
    
})
app.post("/name", function(req, res) {
   
    var string = req.body.first + " " + req.body.last;
    res.json({
        check:"just checking to get the name",
        name: string });
  });
app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // OR you can destructure and rename the keys
   // var { first: firstName, last: lastName } = req.query;
    // Use template literals to form a formatted string
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

app.get('/now',function(req,res,next){
    req.time=new Date().toString();
    next();
},function(req,res){
    res.send(

        {time:req.time}
    )
})

app.get("/:word/echo",(req,res)=>{
   var {word}=req.params;
   res.send({
       echo:word
   })
})

console.log("Hello World")


 module.exports = app;
