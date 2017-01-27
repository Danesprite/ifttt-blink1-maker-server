require('shelljs/global');
var express = require('express');
var app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.post('/dosomething', function (req, res) {
  // Do something

  // Send a response back stating that the request was successful
  res.send('Request successful!');
});


app.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port +'/');
});
