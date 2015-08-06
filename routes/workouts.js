/*jshint node:true*/
'use strict';

module.exports = function(router) {

	/**
	 * MongoDB models
	 */
	var Workout = require('../models/workout');
	/*
		/workout/
	 		post (new workout)
	 		get (list of workouts)
	 	/workout/:workoutId
	 		get (workout)
	 		put (update workout)
	 		delete (workout)
	 */
	
	router.route('/workout')
		.post()
		.get();

	router.route('/workout/:workoutId')
		.get()
		.put()
		.delete();
};