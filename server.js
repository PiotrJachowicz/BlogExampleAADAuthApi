const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const authMiddleware = require('./azureAuthenticationMiddleware.js');

app.use(authMiddleware);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function () {
  console.log(`Express server listening on port ${process.env.PORT || 3000}`);
});