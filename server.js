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
