var mongoose = require('mongoose');
var db = mongoose.connection;
var Siblings = require('../models/siblings');
mongoose.connect('mongodb://hamzaalalach:43898561@ds147905.mlab.com:47905/tp');
db.on('error', console.log.bind(console, 'connection error: '));
db.on('open', function() {
	exports.findAll = function(callback) {
		Siblings.find(function(error, data) {
			if (error) {
				console.log(error);
			} else {
				return callback(data);
			}
		});
	}
	exports.findOne = function(callback, name) {
		Siblings.find({'name.first': name}, function(error, data) {
			if (error) {
				console.log(error);
			} else {
				return callback(data);
			}
		});
	}
});