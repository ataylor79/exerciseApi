/*jshint node:true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var perfRes = { weight: { type: String }, requests: { type: Number }};

var perfSchema = new Schema({
	doc: perfRes,
	css: perfRes,
	js: perfRes,
	image: perfRes,
	favicon: perfRes,
	score: Number,
	grade: String,
    date: { type: Date, default: Date.now}

}, {collection: 'perfResults'});

module.exports = mongoose.model('perfResult', perfSchema, 'perfResults');
