/* jshint node: true */
var should 		= require('should'),
	request 	= require('supertest'),
	app 		= require('../server.js'),
	User	 	= require('../models/userModel').user,
	agent 		= request.agent(app.listen());


describe('User CRUD tests', function () {
	'use strict';

	var id;

	it('should allow a new user to be posted and return an _id', function (done) {

		var userPost = {firstName: 'Fred', lastName: 'Smith', dob: 304883873};

		agent.post('/api/user')
			.send(userPost)
			.expect(201)
			.end(function (err, results) {
				results.body.should.have.property('_id');
				id = results.body._id;
				done();
			});
	});

	it('should get all user records', function (done) {

		agent
			.get('/api/user')
      		.expect('Content-Type', /json/)
      		.expect(201)
      		.end(function(err, res){
		        if (err) return done(err);
		        done();
		      });

	});

	it('should get a single record by ID', function (done) {
		
		agent
			.get('/api/user/' + id)
	  		.expect('Content-Type', /json/)
	  		.end(function(err, results){
		        if (err) return done(err);

		        results.body.should.have.property('_id');
		        results.body.should.have.property('lastName', 'Smith');
		        done();
		      });

	});

	// it('should get records as per query string', function (done) {

	// 	agent
	// 		.get('/api/exercise/?title=press-up')
	//   		.expect('Content-Type', /json/)
	//   		.end(function(err, results){
	// 	        if (err) return done(err);

	// 	        results.body[0].should.have.property('_id');
	// 	        results.body[0].should.have.property('title', 'press-up');
	// 	        done();
	// 	      });

	// });

	// it('should update all fields in record', function (done) {

	// 	var newData = { title: 'shoulder press',
	// 					description: 'Push bar above head',
	// 					icon: 'icon url',
	// 					works: ['shoulders']};

	// 	agent
	// 		.put('/api/exercise/' + id)
	// 		.send(newData)
	// 		.expect('Content-Type', /json/)
 //      		.expect(201)
 //      		.end(function (err, results) {
 //      			if (err) return done(err);

 //      			results.body.should.have.property('title', 'shoulder press');
 //      			results.body.should.have.property('icon', 'icon url');
 //      			done();
 //      		});
	// });

	// it('should patch some fields in record', function (done) {

	// 	var newData = { works: ['shoulders', 'arms']};

	// 	agent
	// 		.patch('/api/exercise/' + id)
	// 		.send(newData)
	// 		.expect('Content-Type', /json/)
 //      		.expect(201)
 //      		.end(function (err, results) {
 //      			if (err) return done(err);

 //      			results.body.should.have.property('works');
 //      			results.body.should.have.property('works').with.lengthOf(2);
 //      			done();
 //      		});	
	// });

	// it('should delete a record', function (done) {

	// 	agent
	// 		.delete('/api/exercise/' + id)
	// 		.expect(204)
	// 		.end(function (err, results) {
	// 			if (err) return done(err);

	// 			done();
	// 		});
	// });
	
	after(function (done) {
		User.remove().exec();
		done();
	});
});

