var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/', function (request, response) {

    response.send('<h1>Home Page</h1>');
});

app.get('/home', function (request, response) {

    response.send('<h1>Home Page</h1>');
});

app.get('/contact', function (request, response) {

    response.send('Contact page');
});

app.listen(port, function () {

    console.log('Server running on port ' + port +'...');
});
