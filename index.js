var express = require("express");
var app = express();
var fs = require("fs");
var { google } = require("googleapis");
var OAuth2 = google.auth.OAuth2;

app.get("/", function(req, res) {
  res.send("Hello World");
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Example app listening at http://%s:%s", host, port);
  
});

fs.watch(".", (eventType, filename) => {
  if (eventType === "rename" && filename.endsWith(".mp3")) {
    if (fs.existsSync(filename)) {
      console.log('subir archivo');
      // google.google
    }
  }
});