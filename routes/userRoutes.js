/*jshint node:true*/
'use strict';

module.exports = function (router) {

	/**
	 * MongoDB models
	 */
	var UserModel = require('../models/userModel');
	var userController = require('../controllers/userController')(UserModel.user);
	var userMiddleware = require('../middleware/commonMiddleware')(UserModel.user);

	router.route('/user')
		.post(userController.post)
		.get(userController.get); 

	router.use('/user/:recordId', userMiddleware.findById);

	router.route('/user/:recordId')
		.get(userController.getById);

	/*
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
