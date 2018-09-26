$("#questionaire").on("submit",function(event){
  event.preventDefault();
  let answersArray = [];
  for(let i = 0; i < 10; i++){
    if($("#q"+(i+1)).val() === ""){
      answersArray.push(0);
    }
    else {
      answersArray.push(parseInt($("#q"+(i+1)).val()));
    }
  }
  let photoUrl = $("#photoInp").val();
  if(photoUrl === ""){
    photoUrl = "https://picsum.photos/200/300?image=55";
  }
  let obj = {
    name: $("#nameInp").val() ,
    score: answersArray,
    photo: photoUrl
  }
  $.post("/api/friends",obj).then(function(data){
    $("#soulBod").empty();
    if(data[1] === "nope"){
      $("#soulBod").append("<h1>Your soulmate is...yourself?</h1>");
      $("#soulBod").append("<img src='"+data[0].picture+"' alt='' />");
      $("#soulBod").append("<h2>I guess you're redoing the quiz?</h2>");
    }
    else {
      $("#soulBod").append("<h1>Your soulmate is..."+data[0].name+"!</h1>");
      $("#soulBod").append("<img src='"+data[0].picture+"' alt='' />");
      $("#soulBod").append("<h2>Your have "+((40-data[1])/40)*100+"% match!</h2>");
    }
    $("#matchModal").modal('show');
  });
})
