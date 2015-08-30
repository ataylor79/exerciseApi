/* jshint node:true */
module.exports = function (User) {
	'use strict';
	/**
	 * @api {post} /api/user Save a new user
	 * @apiName Add an user
	 * @apiGroup Users
	 * @apiDescription
	 * 		Add a user to the records
	 * @apiSuccess {String} status 201
	 */
	var post = function (req, res) {
		var user = new User(req.body);

		if (!req.body.firstName || !req.body.lastName) {
			res.status(400);
			res.send('First and last name are required');
		} else {
			user.save(function (err, user) {
				if (err) { res.status(500).send(err); }

				res.status(201);
				res.send(user);
			});
		}
	};
	/**
	 * @api {get} /api/user Get list of users
	 * @apiName Get a list of users
	 * @apiGroup Users
	 * @apiDescription
	 * 		Get list of stored users
	 * @apiSuccess {Object} list of users
	 */
	var get = function (req, res) {

		var query = {};

		if (req.query.firstName) {
			query.firstName = req.query.firstName;
		}

		if (req.query.lastName) {
			query.lastName = req.query.lastName;
		}

		User.find(query, function (err, userList) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.send(userList);
		});
	};
	/**
	 * @api {put} /api/exercise/{exerciseId} Overwrite complete existing exercise
	 * @apiName Overwrite an exercise
	 * @apiGroup Exercises
	 * @apiParam {Number} id exercise unique ID.
	 * @apiSuccess {String} status 201
	 */
	// var put = function (req, res) {
	// 	req.exercise.title 			= req.body.title;
	// 	req.exercise.description 	= req.body.description;
	// 	req.exercise.icon 			= req.body.icon;
	// 	req.exercise.works 			= req.body.works;

	// 	req.exercise.save(function (err, exercise) {
	// 		if (err) { res.status(500).send(err); }

	// 		res.status(201);
	// 		res.json(exercise);
	// 	});
	// };
	/**
	 * @api {patch} /api/exercise Overwrite fields in record
	 * @apiName update an exercise
	 * @apiGroup Exercises
	 * @apiDescription
	 * 		Overwrite fields in record
	 * @apiSuccess {String} status 201
	 */
	// var patch = function (req, res) {
	// 	if (req.body._id) { delete req.body.id; }

 // 		for (var prop in req.body) {
 // 			req.exercise[prop] = req.body[prop];
 // 		}

 // 		req.exercise.save(function (err, exercise) {
	// 		if (err) { res.status(500).send(err); }

	// 		res.status(201);
	// 		res.json(exercise);
	// 	});
	// };

	/**
	 * @api {delete} /api/exercise/{exerciseId} remove record
	 * @apiName delete an exercise
	 * @apiGroup Exercises
	 * @apiParam {Number} id exercise unique ID.
	 * @apiDescription
	 * 		delete existing record
	 * @apiSuccess {String} status 204
	 */
	// var remove = function (req, res) {
	// 	req.exercise.remove(function (err) {
 // 			if (err) {
 // 				res.status(500).send(err);
 // 			} else {
 // 				res.status(204);
 // 				res.json({status : 'Exercise removed'});
 // 			}
 // 		});
	// };

	var getById = function (req, res) {
		res.json(req.result);
	};
	
	return {
		post: post,
		get: get,
		getById: getById,
		//put: put,
		//patch: patch,
		//remove: remove
	};
};