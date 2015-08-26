var express = require('express');
var app = express();
var i = 0;
app.get('/', function (req, res) {
  console.log('request #',i);
  client.get('foo',function(err, data){
    res.json({'status':'online', 'request':i});
  });
  i++;
  client.set('foo',i);
});

console.log('Hello world: Demo test');


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening');

});


var host = process.env.REDIS_HOST;
var port = process.env.REDIS_PORT;

console.log('connect to client: ', host, ":", port );
/* 
var redis = require("redis"), client = redis.createClient(port, host);
client.auth(process.env.REDIS_AUTH);
client.on('connect', function (){

  console.log('connected to Redis');
});
*/
