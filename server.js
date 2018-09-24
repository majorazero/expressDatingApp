const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
require("./app/routing/apiRouting.js");
require("./app/routing/htmlRoutes.js");
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//htmlRoutes
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"app/public/home.html"));
});
app.get('/survey',function(req,res){
  res.sendFile(path.join(__dirname,"app/public/survey.html"));
});

//apiRoutes.js
app.get("/api/friends",function(req,res){
  res.json({message:"You've hit friends!"});
});
app.post("/api/friends",function(req,res){
  res.json({message:"You've posted friends!"});
})


app.listen(PORT,function(){
  console.log("Listening in on Port "+PORT);
});
