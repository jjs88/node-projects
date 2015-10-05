var http = require('http');


//pass in the routes function and controller array.
//route will handle what controller gets called based on request URL
module.exports.start = function(route, controller) {

	
	http.createServer(function(req, res) {



		if(req.method === 'POST') {
			var data = "";

			//setup data listeners
			req.on('data', function(chunk) {

				data += chunk;

			});

			req.on('end', function() {
				route(req.url, controller, res, data);
			})
		} else {
			
			//call the route without data
			console.log(req.url);
			route(req.url, controller, res);
		}











	}).listen(3000, function() {;
		console.log("server has started...");
	});

};