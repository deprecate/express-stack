
var express = require('express');
var app = express();

/* Required Route Files */

app.get('/hello/:name', function(req, res) {
  res.send('yo! ' + req.params.name);
});

module.exports = app;
