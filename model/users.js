var db = require('../db.js'); //require the connection to the db;
var mongoose = require('mongoose');

//create a schema to use
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;