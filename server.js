const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const friends = require("./app/data/friends.js");
// require("./app/routing/apiRouting.js");
// require("./app/routing/htmlRoutes.js");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'app')));

//htmlRoutes
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"app/public/home.html"));
});
app.get('/survey',function(req,res){
  res.sendFile(path.join(__dirname,"app/public/survey.html"));
});

//apiRoutes.js
app.get("/api/friends",function(req,res){
  res.json(friends.friendsDatabase);
});
app.post("/api/friends",function(req,res){
  let newEntry = new friends.Friend(req.body.name,req.body.score,req.body.photo);
  //handles compatability
  let compatability = 10000;
  let soulmateIndex = -1;
  for(let i = 0; i < friends.friendsDatabase.length; i++){
    if(Math.abs(friends.friendsDatabase[i].scoreValue()-newEntry.scoreValue())<compatability){
      compatability = Math.abs(friends.friendsDatabase[i].scoreValue()-newEntry.scoreValue());
      soulmateIndex = i;
    }
  }
  //your mate!
  console.log(friends.friendsDatabase[soulmateIndex],compatability);
  //data now stored
  friends.friendsDatabase.push(newEntry);
  return res.json([friends.friendsDatabase[soulmateIndex],compatability]);
});




app.listen(PORT,function(){
  console.log("Listening in on Port "+PORT);
});
