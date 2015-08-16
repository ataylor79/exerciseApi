var gulp   		= require('gulp');
var $      		= require('gulp-load-plugins')();

gulp.task('build-apiDoc', function () {
	$.apidoc.exec({
		src: 'routes',
		dest: 'apiDoc/'
	});
});
