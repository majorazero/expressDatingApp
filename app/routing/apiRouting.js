const path = require("path");
const friends = require("../data/friends.js");

module.exports = function (app){
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
};

//check for unique name validation
//heroku deploy
//gif video
