#!/usr/bin/env node

var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var anychart_nodejs = require('anychart-nodejs');

var indexTemplate = fs.readFileSync('./template.html', 'utf-8');

var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.send(indexTemplate)
});

app.post('/export', function (req, res) {
  anychart_nodejs.exportTo(req.body.code, 'png', function(err, data) {
    var base64Data = data.toString('base64');
    var result = {data: base64Data};
    res.send(JSON.stringify(result));
  });
});

app.listen(3000, function () {
  console.log('Export server listening on port 3000!')
});





