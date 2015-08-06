var gulp   		= require('gulp');
var $      		= require('gulp-load-plugins')();
var config 		= require('./../gulp.config')().config;

gulp.task('build-apiDoc', function () {
	$.apidoc.exec({
		src: 'routes',
		dest: 'apiDoc/'
	});
});
