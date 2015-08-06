/*jshint node:true*/
'use strict';

module.exports = function (router) {

	/**
	 * MongoDB models
	 */
	var User = require('../models/users');

	/*
	 /user/
	 	post (new user)
	 	get (list of users)
	 /user/:userId
	 	get (user)
	 	put (update user)
	 	delete (user)
	 /user/:userId/stats/
		post (new user stats)
	 	get (user list of stats)
	 /user/:userId/stats/:statId
	 	get (user stats)
	 	put (update user stats)
	 	delete (users stats)
	 /user/:userId/workout/
		post (new user workout)
		get (list of user workouts)
	 /user/:userId/workout/:workoutId
	 	put (update user workout)
	 	get (user workout)
	 	delete (user workout)
	*/

};
