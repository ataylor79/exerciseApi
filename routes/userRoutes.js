/*jshint node:true*/
'use strict';

module.exports = function (router) {

	/**
	 * MongoDB models
	 */
	var UserModel = require('../models/userModel');
	var User = UserModel.user;
	var Stats = UserModel.userStats;
	var userController = require('../controllers/userController')(User);
	var statsController = require('../controllers/statsController')(Stats);
	var userMiddleware = require('../middleware/commonMiddleware')(User);

	router.route('/user')
		.post(userController.post)
		.get(userController.get);

	router.use('/user/:_id', userMiddleware.findById);

	router.route('/user/:_id')
		.get(userController.getById)
		.put(userController.put)
		.patch(userController.patch)
		.delete(userController.remove);

	router.route('/user/:_id/stats')
		.post(statsController.post)
		.get(statsController.get);


	/* /user/:userId/stats/:statName
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
