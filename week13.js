var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.listen(process.env.PORT || 3000);
console.log("Server is listening on port 3000");
