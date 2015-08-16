/* jshint node:true */
module.exports = function (Exercise) {
	'use strict';
	/**
	 * @api {post} /api/exercise Upload a new exercise
	 * @apiName Add an exercise
	 * @apiGroup Exercises
	 * @apiDescription
	 * 		Add an exercise to the library
	 * @apiSuccess {String} status 201
	 */
	var post = function (req, res) {
		var exercise = new Exercise(req.body);

		if (!req.body.title) {
			res.status(400);
			res.send('Title is required');
		} else {
			exercise.save(function (err, exercise) {
				if (err) { res.status(500).send(err); }

				res.status(201);
				res.send(exercise);
			});
		}
	};
	/**
	 * @api {get} /api/exercise Get list of exercises
	 * @apiName Get a list of exercises
	 * @apiGroup Exercises
	 * @apiDescription
	 * 		Get list of stored exercises
	 * @apiSuccess {Object} list of exercise
	 */
	var get = function (req, res) {

		var query = {};

		if (req.query.title) {
			query.title = req.query.title;
		}

		Exercise.find(query, function (err, exerciseList) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.send(exerciseList);
		});
	};
	/**
	 * @api {put} /api/exercise/{exerciseId} Overwrite complete existing exercise
	 * @apiName Overwrite an exercise
	 * @apiGroup Exercises
	 * @apiParam {Number} id exercise unique ID.
	 * @apiSuccess {String} status 201
	 */
	var put = function (req, res) {
		req.exercise.title 			= req.body.title;
		req.exercise.description 	= req.body.description;
		req.exercise.icon 			= req.body.icon;
		req.exercise.works 			= req.body.works;

		req.exercise.save(function (err, exercise) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(exercise);
		});
	};
	/**
	 * @api {patch} /api/exercise Overwrite fields in record
	 * @apiName update an exercise
	 * @apiGroup Exercises
	 * @apiDescription
	 * 		Overwrite fields in record
	 * @apiSuccess {String} status 201
	 */
	var patch = function (req, res) {
		if (req.body._id) { delete req.body.id; }

 		for (var prop in req.body) {
 			req.exercise[prop] = req.body[prop];
 		}

 		req.exercise.save(function (err, exercise) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(exercise);
		});
	};

	/**
	 * @api {delete} /api/exercise/{exerciseId} remove record
	 * @apiName delete an exercise
	 * @apiGroup Exercises
	 * @apiParam {Number} id exercise unique ID.
	 * @apiDescription
	 * 		delete existing record
	 * @apiSuccess {String} status 204
	 */
	var remove = function (req, res) {
		req.exercise.remove(function (err) {
 			if (err) {
 				res.status(500).send(err);
 			} else {
 				res.status(204);
 				res.json({status : 'Exercise removed'});
 			}
 		});
	};

	var getById = function (req, res) {
		res.json(req.exercise);
	};
	/*
		Middleware function for put, patch and remove
	 */
	var findById = function (req, res, next) {
		Exercise.findById(req.params.exerciseId, function (err, exercise) {
 			if (err) { 
 				res.status(500).send(err); 
 			} else if (exercise) {
 				req.exercise = exercise;
 				next();
 			} else {
 				res.status(404).send({status: 'Exercise not found'});
 			}
 		});
	};

	return {
		post: post,
		get: get,
		getById: getById,
		put: put,
		patch: patch,
		remove: remove,
		findById: findById
	};
};