/* jshint node: true */
var should 		= require('should'),
	request 	= require('supertest'),
	app 		= require('../../server.js'),
	Exercise 	= require('../../models/exerciseModel'),
	agent 		= request.agent(app.listen());


describe('CRUD test', function () {
	'use strict';

	it('should allow an exercise to be posted and return an _id', function (done) {

		var exercisePost = {title: 'press-up', description: 'Push up'};

		agent.post('/api/exercise')
			.send(exercisePost)
			.expect(201)
			.end(function (err, results) {
				results.body.should.have.property('_id');
				done();
			});
	});

	it('should retrieve all exercise records', function (done) {

		agent
			.get('/api/exercise')
      		.expect('Content-Type', /json/)
      		.expect(200)
      		.end(function(err, res){
		        if (err) return done(err);
		        done();
		      });

	});
	
	afterEach(function (done) {
		Exercise.remove().exec();
		done();
	});
});

