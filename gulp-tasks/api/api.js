/* jshint node:true */
var gulp 	= require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('runApi', function () {
	'use strict';
	nodemon({
		script: 'server.js',
		ext: 'js',
		env: {
			port: 8000
		},
		ignore: ['node_modules']
	}).
	on('restart', function () {
		console.log('restarting api');
	});
});

