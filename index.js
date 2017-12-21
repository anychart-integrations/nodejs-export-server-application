#!/usr/bin/env node

var fs = require('fs');
var jsdom = require('jsdom').jsdom;
var express = require('express');
var bodyParser = require('body-parser');

var document = jsdom('<body><div id="container"></div></body>');
var window = document.defaultView;

var anychart = require('anychart')(window);
var anychart_nodejs = require('anychart-nodejs')(anychart);

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
  //export parameters
  var params = {
    type: 'png',
    dataType: 'javascript',
    document: document
  };

  anychart_nodejs.exportTo(req.body.code, params, function(err, data) {
    var base64Data = data.toString('base64');
    var result = {data: base64Data};
    res.send(JSON.stringify(result));
  });
});

app.listen(3000, function () {
  console.log('Export server listening on port 3000!')
});





