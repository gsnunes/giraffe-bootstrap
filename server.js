var connect = require('connect'),
	serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080);
console.log('Server running at http://localhost:8080/');