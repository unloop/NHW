var express = require('express');
var sys = require('sys');




(function () {
  'use strict';
  
  console.log ('start app');

  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("ping -c 100 localhost", puts);  
  
  var app = express();

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
    setInterval(function () {console.log ('ping')}, 1000);
  });
})();
