/*jshint node:true*/
'use strict';

module.exports = function (router) {

	var Exercise = require('../models/exerciseModel');
	var exerciseController = require('../controllers/exerciseController')(Exercise);
	
	router.route('/exercise')
		.post(exerciseController.post) // tested
		.get(exerciseController.get); // tested

	router.use('/exercise/:exerciseId', exerciseController.findById);

	router.route('/exercise/:exerciseId')
	 	.get(exerciseController.getById)
	 	.put(exerciseController.put)
	 	.patch(exerciseController.patch)
	 	.delete(exerciseController.remove);
};