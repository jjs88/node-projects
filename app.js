var server = require('./server.js');

//import the controllers
var homeController = require('./controller/homeController.js');
var userController = require('./controller/userController.js');
//import the route module
var route = require('./routes.js');

//add controllers to array of controllers
var controllers = [];
controllers['/'] = homeController.home;
controllers['/users'] = userController.users;
controllers['/addUser'] = userController.addUser;
controllers['/user/'] = userController.user;



server.start(route.routes, controllers);