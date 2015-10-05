//connect app to mongdb
var mongoose = require('mongoose').connect('mongodb://localhost:27017/userApp');

module.exports = mongoose;