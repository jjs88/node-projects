var User = require('../model/users.js');
var fs = require('fs');
var querystring = require('querystring');



module.exports.user = function(res) {

	res.end("yes");



}

module.exports.addUser = function (res, data) {

	console.log("/addUser was called");
	// console.log(queryString.parse(data).name);
	var newUser = new User({
		name: querystring.parse(data).name,
		email: querystring.parse(data).email
	});

	newUser.save(function(err, user) {
		if(err) throw err;
		console.log("user has been created successfully", user);

		
		//redirect
		// make a function to encapsulte like res.render
		fs.readFile('./views/home.html', function(err, html) {

			if(err) throw err;


			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(html);
			res.end();
	    });


	})



};

module.exports.users = function(res, data) {

	
	var userHTML = "";
	var link = "";


	
		User.find(function(err, users) {


				if(err) throw err;

				users.forEach(function(user) {

					userHTML += '<a href="/user/' + user._id + '"' + '</a>' + 
								'<li>' + user.name.toString() + '</li>'
					console.log(userHTML);

				});


				var html = '<!doctype html> ' +
							'<html> ' +
							'<head> ' +
							'</head> '+
							'<body> ' +
							'<ul> ' +
							userHTML +
							' </ul> ' +
							'</body> ' +
							'</html> ';

				console.log(html);
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(html);
				res.end();

			
		});

};