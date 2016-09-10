var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/tp');
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function() {
	console.log('Connected to db!');
	var Sibling = require('../models/siblings');
	Sibling.create([{
		name: {
			first: 'Mohamed'
		},
		age: 24,
		city: 'Tanger'
	}, {
		name: {
			first: 'Ibtissam'
		},
		age: 23,
		city: 'Fes'
	}, {
		name: {
			first: 'Hamza'
		},
		age: 18
	}, {
		name: {
			first: 'Yassine'
		},
		age: 15
	}, {
		name: {
			first: 'Reda'
		},
		age: 12
	}, {
		name: {
			first: 'Mohamed',
			last: 'Bayady'
		},
		age: 18
	}], function(error) {
		if (error) {
			console.log(error);
		} else {
			db.close();
			process.exit();
		}
	})
})