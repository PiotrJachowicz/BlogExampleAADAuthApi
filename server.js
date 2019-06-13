const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');

app.use(cors());
app.configure(function () {
  app.set('port', process.env.PORT || 3000);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});