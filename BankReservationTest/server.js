// server.js
require('dotenv').config();

// process.env.NODE_ENV = 'local';

var config = require('./config');

var app = require('./app');

var http = require('http');

var httpServer = http.createServer(app);

var server = httpServer.listen(config.port, () => {
	console.log(`Server started on Port @ ${server.address().port}`); //listening port

	process.on('uncaughtException', function (err) {
		console.log('Caught exception: ' + err);
		throw err;
	});
});
