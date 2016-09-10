var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var siblingsSchema = new Schema({
	name: {
		first: String,
		last: {
			type: String,
			default: 'Alalach'
		}
	},
	age: Number,
	city: {
		type: String,
		default: 'Taounate'
	}
});
var Sibling = mongoose.model('Sibling', siblingsSchema);
module.exports = Sibling;