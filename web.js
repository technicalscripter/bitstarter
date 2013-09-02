var express = require('express');
var app = express();
require('fs');

app.use(express.logger());

var buf = fs.readFileSync('index.html');
var final_string = buf.toString();
app.get('/', function(request, response) {
  response.send(final_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
