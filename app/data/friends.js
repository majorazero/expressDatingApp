const Friend = function(name,score,pic){
  this.name = name;
  this.picture =  pic;
  this.score = score;
  this.scoreValue = function(newArr){
    // let fullVal = 0;
    // for(let i =0; i < this.score.length; i++){
    //   fullVal += parseInt(this.score[i]);
    // }
    // return fullVal;
    let scoreVal = 0;
    for(let i = 0; i < 10; i++){
      scoreVal += Math.abs(this.score[i]-newArr[i]);
    }
    return scoreVal;
  }
};

let friendsDatabase = [];

friendsDatabase.push(new Friend("Jane",[4,3,2,1,3,2,3,4,2,2],"https://picsum.photos/200/300?image=0"));
friendsDatabase.push(new Friend("Marley",[3,2,1,4,1,3,4,1,1,1],"https://picsum.photos/200/300?image=1"));
friendsDatabase.push(new Friend("Flooper",[4,4,3,4,2,3,4,1,3,2],"https://qph.fs.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79-c"));
module.exports = {
  friendsDatabase,
  Friend
};
