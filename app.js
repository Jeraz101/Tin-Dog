const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));





app.get("/", function(req, res){

  res.sendFile(__dirname + "/login.html")
})
app.get("/login", function(req, res){
  res.redirect("/")
})




app.post("/login", function(req, res){
  const email = req.body.Email;
  const pass = req.body.Password;
  console.log("my email "+ email + "password" + pass);

  res.sendFile(__dirname + "/index.html")
})




app.listen(process.env.PORT || 3000, function(){

  console.log("Server started at port 3000");
})
