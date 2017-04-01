var path = require('path');
var express = require('express');
var fs = require('fs');
var browserHTMLTemplate = fs.readFileSync(__dirname + '/browser.html', 'utf8');

function removeLeadingSlash(str) {
  while(str.charAt(0) === '/'){
    str = str.substr(1);
  }
  return str;
}

module.exports = function(options) {
  options = options || {};
  var apiRoot = removeLeadingSlash(options.AEP || '');
  var browserHTML = browserHTMLTemplate.replace("entryPoint: '/'", `entryPoint: '/${apiRoot}'`);
  var router = express.Router();

  router.use(express.static(__dirname));

  router.get('/', function(req, res) {
    res.redirect('browser');
  });

  router.get('/browser', function(req, res) {
    res.send(browserHTML);
  });

  router.get('/login', function(req, res) {
    res.sendFile('login.html', {root: __dirname});
  });

  return router;
};
