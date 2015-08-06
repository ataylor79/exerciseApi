/*jshint node:true*/
var mongoose 	= require('mongoose'),
	workout 	= require('./workout'),
	exercise 	= require('./exercise'),
	Schema 		= mongoose.Schema;

var userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dob: Date,
	startDate: { type: Date, default: Date.now }
}, {collection: 'users'});

var statSchema = new Schema({
	userID: Schema.Types.ObjectId,
	date: { type: Date, default: Date.now },
	weight: Number,
	measures: { leg: Number, waist: Number, hip: Number, chest: Number, arm: Number }
}, {collection: 'stats'});

var userWorkoutSchema = new Schema({
	userId: Schema.Types.ObjectId,
	workoutId: [workout],
	date: { type: Date, default: Date.now },
	Notes: String
});

var userExerciseSchema = new Schema({
	userId: Schema.Types.ObjectId,
	userWorkoutId: Schema.Types.ObjectId,
	exerciseId: [exercise],
	date: { type: Date, default: Date.now },

});

var models = {
	user: mongoose.model('user', userSchema, 'users'),
	userStats: mongoose.model('stat', statSchema, 'stats'),
	userWorkout: mongoose.model('userWorkout', userWorkoutSchema, 'userWorkouts'),
	userExercise: mongoose.model('userExercise', userExerciseSchema, 'userExercises')
};

module.exports = models;
