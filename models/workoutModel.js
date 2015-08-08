/*jshint node:true*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
	name: { type: String, required: true },
	description: String,
	exercises: [{
		exerciseId: Schema.Types.ObjectId,
		sets: Number,
		Reps: Number,
		rest: Number,
		tempo: String,
		superSet: [Number],
		superSetIndex: Number
		}],
	Type: [String]
}, {collection: 'workouts'});

module.exports = mongoose.model('workout', workoutSchema, 'workouts');
