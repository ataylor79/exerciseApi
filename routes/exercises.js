/*jshint node:true*/
'use strict';

module.exports = function (router) {

	var Exercise = require('../models/exercise');
	var exerciseController = require('../controllers/exercise')(Exercise);
	
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