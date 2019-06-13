const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
});