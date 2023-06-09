const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname + '/static/'));

app.get("/dirname", (req, res) => {
  // server console
  console.log(__dirname)
});

app.get("/response", (req, res) => {
  res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});

// index
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index2.html");
});

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
 res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
});
