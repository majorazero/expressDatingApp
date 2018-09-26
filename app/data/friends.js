const Friend = function(name,score,pic){
  this.name = name;
  this.picture =  pic;
  this.score = score;
  this.scoreValue = function(){
    let fullVal = 0;
    for(let i =0; i < this.score.length; i++){
      fullVal += parseInt(this.score[i]);
    }
    return fullVal;
  }
};

let friendsDatabase = [];

friendsDatabase.push(new Friend("Jane",[4,3,2,1,3,2,3,4,2,2],"https://picsum.photos/200/300?image=0"));
friendsDatabase.push(new Friend("Marley",[3,2,1,4,1,3,4,1,1,1],"https://picsum.photos/200/300?image=1"));

module.exports = {
  friendsDatabase,
  Friend
};
