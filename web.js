var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.logger());
var buffer1 = new Buffer(fs.readFileSync('index.html'));
var final_string = buffer1.toString();
app.get('/', function(request, response) {
  response.send(final_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
