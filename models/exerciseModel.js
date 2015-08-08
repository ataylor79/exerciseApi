/*jshint node:true*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
	title: { type: String, required: true },
	description: String,
	icon: String,
	works: [String]
}, {collection: 'exercises'});

module.exports = mongoose.model('exercise', exerciseSchema, 'exercises');
