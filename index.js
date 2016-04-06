var express = require('express');
var app = express();

app.get('/', function (request, response) {

	response.send('<h1>Home Page</h1>');
});

app.get('/home', function (request, response) {

	response.send('<h1>Home Page</h1>');
});

app.get('/contact', function (request, response) {

	response.send('Contact page');
});

app.listen(8000, function () {

	console.log('Server running on port 8000...');
});