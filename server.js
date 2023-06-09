const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

// To load the static server files included in the index.html use express.static
// serve your css as static
app.use(express.static(__dirname + "/static/"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/server-response", (req, res) => {
  res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});

app.get("/test", (req, res) => {
  console.log(__dirname)
});


app.post("/", (req, res) => {

  var subName = req.body.yourname
  var subEmail = req.body.youremail;
  res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);


  console.log(req.body);

});
