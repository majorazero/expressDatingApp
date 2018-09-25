const questions = [
  {
    question: "What is your spirit animal?",
    answers: ["A seal.","My spirit animal isn't here.","What's an animal?","Goddamit, this is stupid, I'm not going to meet my soulmate."]
  },
  {
    question: "What is your favorite country?",
    answers: ["Murrica.","I'm a global citizen.","Narnia","I'm confused what this has to do with dating."]
  },
  {
    question: "If you were a lion, then 42?",
    answers: ["42.","56.","73?","Am I having a stroke?"]
  },
  {
    question: "So if you were the last person on earth.",
    answers: ["I would pick my mom.","I already am the last person on earth.","What's an earth?","You didn't even ask me a question, if I was the last person then what?!"]
  },
  {
    question: "আপনার আদর্শ বৃহস্পতিবার রাতে কি?",
    answers: ["在海灘上漫步。","телевизор и холод.","تناول الطعام في مطعم.","Wait, who are you people?!"]
  },
  {
    question: "Given an arbitrary compact gauge group, does a non-trivial quantum Yang–Mills theory with a finite mass gap exist? ",
    answers: ["3̷̢̨̡̤͕͇̮̩̳͕͈̙̈́͑̓̾̉̾̈́̏͆̎̚͝x̷̡̨̛̺͙̫̲̐̎̾̑̾̌̓͛ͅ+̸̨͇͎̻̦̤͎͈̓̾̽͒͆̎̍͒̕͘͝2̶̞̤̪̞̙̩͕̘̹̞͚̩̖͂̈́͑́̀̾̚̚͜","3̸̰̥̱͙̃̈͠5̷̪̫̣͌̎͑́͊̅͘2̸̝̂͋̇̈́̅̑̂3̴̦͉̱̓̎̈͌̅̑̇͛̚͜4̶̛̪̟͍̾̾̐͝͠͝-̵̦͚̘͐̋̿̇̋̈́̍̃ͅd̵̤̟̘̻͖̫͉͑̋̌͝4̴̢̢̢̪̗̺̫̗̈́̅͊̄͛͂/̵̖̙͉̗̏̑̏̀͋̔̌̚2̶̲͈̲̓̊̾̂́́͗̆͂1̴̖͕̎̍͗̍3̵̨̡͚͔̹̤̏ͅͅ4̴̩̫́̀̾̐͐̐͌̄͜͝","4̸̛̱͂̽̎̐̌̇͌͛͒͊̒̔̏̀̔͌̆̀͋̇̅̆̔͐̉̃̍͂̊̉͊̈͆͆̐́̅̀̈́̇̓͆̓̓̓͒́͗̓̃̈́̓͂̽́̀̾̊̍̒̆̽̀̒͐͐̔̀̏͊̂̾͛̏̀͆̌̓̃̂̄̂͗̉̀̂̋̏͊̕̚̕̚̕͘̚͘͘͝͝͠͝͠͝͝2̴̧̨̨̢̡̡̧̻̖̫͉̫̟̰̭͎͙͈̠̙͇͎̘̲͚̗̦̞͔̮̺̙̗̝͓͓̩̝̺̫̝̱͉̦̪͚̗̙͇̗͓̪͕̩̣̺̲̬̭̘̮̬̖͍̯͙͎͍̲̳̜̙̫̻͂́̽̀̂͑͒̔̇̃̆̀̍̈́̽͒̆̒̀̓̎̆͒̅͌̎͗́̅̃͐͗̂̿̑͊̒̀͋̎̓̓͑͊̄͊̂͂̉͋̑̓̊̇̓̈́͋́̓̒́͗̔͗̄̀̉̊̈́̃͋̅͑͐͑͗̎̄̄̿̍̏͂̔́̌͗̕̚̚̚̕͘͘̚̚͜͜͝͠͝͠͝͠͝͝͝ͅͅ.̶̨̧̢̨̲̖͇̩̲̯͔̥̣̫̙̤̜͉̩͔̬̲̩̥̜̳̝͕̺͉̮͛̉̌̈́̔̇̌̈́̂̈́͂̂̈̍̋̃̍̆́̆̍̋̽̆͆̾̓̀̃̋̓͛̽̉̾͐̇̊̋̄̈́̌̆̽̃̑͌̔̇̒̈͛̔͒̐̿̀̃͒̓̍̆̕̕̕͘̕͝͠ͅͅ.","When did I get here?"]
  },
  {
    question: "Ẃ̶̛̛̙̟͚͔̜̰͕̱̓̿͑́͒̾̿̽̔̓́͆̈́͊͘̚͝h̴̰̩̗͈͔͗̏̉͊̓͝ą̴̢̧͕̙̣̖̺͇̣̦͎͖̟̜͉̣̣̻̲̩̰̺̬̫̝͛͌̽̊͐͆͂̀̏́̀̉͘͝͝͝͠͝t̸̢̡̢̡̤͔̫̣̠̯̯̩̹͉̱̲͎̹͖̙̜̬̣̙͍͍͙̘̬̔͝ ̷̡̢̮̟̺̝̝̹̬͓͊̈́̀͊̕͘í̵̡̛̹͇̼̜̹̝̤̖̇̏̈́̑͋͑͊̅̽̈͛̌͌̔̂́̏̓̀͒̾̔̄̏̈́̍̈́̆̕͜͝͠ͅs̶̳̮͚̭͉͖͖͖͍̙͙̣͖͍͍̓̓̓̈̃͂́̀̑͒̈́͐̌̉̈̽̂̅͗̍̿͆̃͆̈́̆͋͘͠͠ ̵̨̛͍̼̲͇̙̰͉̹̟̳̼͖̜͎͓̩̟̪̘́̃̌͑͂̂̊̌͒̀́̒̽͒̌͐͌̌͑̀̑̃̽̊̄̊̑͒̅̚̚̕͝͠͝ȳ̷̨̨̧̫̘̙̰͇̞̱̟͔͉̞̭̫̞͇̮̠͈̥̳̜̞͝ͅơ̷̥̽̎͂͆̔̒ų̷̧̛̖͚̝͇̫̦̤̼̟̥̝̪̮͇̩̄̓͌̅̒͐͐̅͛͗̇̑̀͂̂̾̐͆͂̚͜͠͝r̶̛̞̦̬̟̩̯͍̮̗͖̳͖͙͓̟̱̬̣̞̬̣͔͖͖̒̾̄ͅ ̵̟̥͔͚̤̯̰̹͕͉̩̦͎͇̯̞̝͌̑͌̏̎͌̑̏̀̊̓́̊͂͠͝s̸̛̳̀͌͒͌̈́̌̈́́̓̈́͛̉̔̇̀̅̌̚̕͝͠p̸̨͓̹̺̖̗͍͓̯̹͙̪͓̣̏̒̓̽͑̈́̆͘ị̸͎̝̱͙̹̰̺̓͊̀̀͌̀́̎̃͛͂̉̍̅̃̿̂͛͑̀̍̓̚͝͠͝r̵̡̡̠̤̯͇̝͈͓̙̿̄̃̂̓̊͂̊̑̽̉͆͌͛͘͜͝͝ì̷̛̭̮͇͔̝̊̎͊̇̈́͐̀̿̑̀̄̌͑̈́͑͘̚͝ț̴̢̫̪̞̽̊̃̂͌͠ͅ ̸̨̡̨̰͈̳̹̻̣͎͇̪̞͔͚̱̀͋̃̈̓͛̏̋̒̂̑̀́͂̔̎͊̑̈́͘͜͝͝͠ą̷̢̨̡̧̞̬͓̜͖̼̲̻͙̭̲͖͔͚̜̪̳̖̗̲̪̫̭̫͓̯͚͔͐̍͊̽͆̃͗͜͠ņ̴̛̮̟̖̠̞̮̗̣̮͓̠̘͈̲͎̭̱͔̮̦̗̘̙̼͚̽̀͊̏͂͌͜ͅi̵̡̖̩̭̳͇̙̰̱̰͖͙̅͌̅͋̓̂̉̆̃̅̍̽̅͂̇͗̀̌̉͘̕͝m̴̛͍̓̌̓̒͑̐̔̽̿̈̿͑͛̇͑̕͝a̵̳̻̪̝͎͍̦̠̮̹͙̥̭͎̓̃̾͗ͅl̷̡̖̱͈̜͖̖̦͈̟͕͈̘͑̓̉̈́͋͗̔̿́̉̉̿͂̋̽͂̇͑͐̑̚͠ͅ?̶̛̜̥̦̥̭͚̠̤̫̪͍̰̳̣͕̯͎̜̆̄̂̐̎͑̑͒͒͊̏̅͒̊̒͐̈́̈́̌̈͋̉͘",
    answers: ["A seal.","My spirit animal isn't here.","Oh my god, please let me go home."]
  },
  {
    question: "What is your favorite color?",
    answers: ["hsv(217°, 73%, 96%)","#4286f4","rgb(66, 134, 244)","Blue."]
  },
  {
    question: "Quis te eiusmod ea magna, officia ut summis. Excepteur adipisicing e laborum ut ullamco sint iis arbitror praetermissum ex non fabulas comprehenderit, malis expetendis.",
    answers: ["admodum esse aliquip vidisse..","aliquip tempor eiusmod.","Fugiat doctrina e aliqua ipsum","Send help."]
  },
  {
    question: "What do you hope to find in your soulmate?",
    answers: ["A friend.","A lover.","A life companion.","ȩ̷̧̖͓̠̦̜͎̔̀v̸̙̟͚̌͆ę̸̞͙̣͎͚̜͕̱̐͋̐͆̏͋̋͘͠r̶͕̪̝̠̓ͅy̵̯̗͑̏͗t̴̨̬͓͚̪̦̠͉̟͌̆͋̀̈́̃͠ḩ̸͖̞̼̟͎͓̮̙̅̓͗͆͝í̵̖̋̓̒̆͘͠n̶̛̗̼̪͔̝͛͋̆̂̔g̴̨̞͚̹͙̫͉̠̯͗͐."]
  }
];

for(let i = 0; i < questions.length; i++){
  let newDiv = $("<div>").addClass("form-group");
  let newSelect = $("<select>").addClass("form-control").attr("id","q"+(i+1));
  newSelect.append("<option value='' disable selected>Select Your Options</option>");
  newDiv.append("<h2>Question "+(i+1)+"</h2>");
  newDiv.append("<h3>"+questions[i].question+"</h3>");
  for(let j = 0; j < questions[i].answers.length; j++){
    let newOption = $("<option>").attr("value",j+1).text(questions[i].answers[j]);
    newSelect.append(newOption);
  }
  newDiv.append(newSelect);
  $("#questionaire").append(newDiv);
}
