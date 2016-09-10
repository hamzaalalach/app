var express = require('express');
var mongoose = require('mongoose');
var Siblings = require('../models/siblings');
var search = require('../bin/findFromDB');
var router = express.Router();
router.get('/siblings', function(req, res, next) {
	search.findAll(function(data) {
		res.json(data);
	});
});
router.get('/siblings/:name', function(req, res, next) {
	search.findOne(function(data) {
		if (data.length == 0) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	}, req.params.name.capitalize());
});
module.exports = router;

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}