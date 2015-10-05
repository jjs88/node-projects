var fs = require('fs');


module.exports.home = function(res) {


	fs.readFile('./views/home.html', function(err, html) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();
	});

};

