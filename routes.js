//this module handles the incoming request.
//if the request matches a URL path in the array, it will be run

module.exports.routes = function(urlPath, controller, res, data) {

	if(controller[urlPath]) {
		//submit the request to the controller
		controller[urlPath](res, data);
	} else {
		//nothing matched the in the controller array
		res.end("No page found for the request made");
	}
}