require('shelljs/global');
var express = require('express');
var app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.post('/blink', function (req, res) {
  // TODO might want to actually look at the request body for the colour to use
  

  // make the blink1 do something
  exec('blink1-tool --blink 1');

  // Send a response back stating that the request was successful
  res.send('blink1 request successful!');
});


app.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port +'/');
});
