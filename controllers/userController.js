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

		user.save(function (err, user) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.send(user);
		});
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
	 * @api {put} /api/user/{UserId} Overwrite user record
	 * @apiName Overwrite a user
	 * @apiGroup Users
	 * @apiParam {Number} id user unique ID.
	 * @apiSuccess {String} status 201
	 */
	var put = function (req, res) {

		User.update({'_id':req.result._id}, req.body, {multi: false}, function (err, result) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(result);
		});
	};
	/**
	 * @api {patch} /api/user/{UserID} Overwrite fields in record
	 * @apiName update a user
	 * @apiGroup Users
	 * @apiDescription
	 * 		Overwrite fields in record
	 * @apiSuccess {String} status 201
	 */
	var patch = function (req, res) {

		var user = req.result;

		if (req.body._id) { delete req.body.id; }

 		for (var prop in req.body) {
 			user[prop] = req.body[prop];
 		}

 		user.save(function (err, result) {
			if (err) { res.status(500).send(err); }

			res.status(201);
			res.json(result);
		});
	};

	/**
	 * @api {delete} /api/user/{userId} remove record
	 * @apiName delete a user
	 * @apiGroup Users
	 * @apiParam {Number} id user unique ID.
	 * @apiDescription
	 * 		delete existing record
	 * @apiSuccess {String} status 204
	 */
	var remove = function (req, res) {

		var user = req.result;

		user.remove(function (err) {
 			if (err) {
 				res.status(500).send(err);
 			} else {
 				res.status(200);
 				res.json({status : 'User removed'});
 			}
 		});
	};

	var getById = function (req, res) {
		res.json(req.result);
	};

	return {
		post: post,
		get: get,
		getById: getById,
		put: put,
		patch: patch,
		remove: remove
	};
};
