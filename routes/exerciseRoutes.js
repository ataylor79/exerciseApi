/*jshint node:true*/
'use strict';

module.exports = function (router) {

	var Exercise = require('../models/exerciseModel');
	var exerciseController = require('../controllers/exerciseController')(Exercise);
	
	router.route('/exercise')
		.post(exerciseController.post)
		.get(exerciseController.get);

	router.use('/exercise/:exerciseId', exerciseController.findById);

	router.route('/exercise/:exerciseId')
	 	.get(exerciseController.getById)
	 	.put(exerciseController.put)
	 	.patch(exerciseController.patch)
	 	.delete(exerciseController.remove);
};