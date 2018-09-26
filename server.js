const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'app')));


require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRouting.js")(app);


app.listen(PORT,function(){
  console.log("Listening in on Port "+PORT);
});
