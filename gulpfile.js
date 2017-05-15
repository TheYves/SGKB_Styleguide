var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('default', ['less', 'uglify', 'copy', 'watch']);

gulp.task('less', function () {
	gulp.src(['./src/less/main.less'])
		.pipe(less())
		.pipe(gulp.dest('./dist/css'));

	gulp.src([
		'./node_modules/highlight.js/styles/github.css',
		'./src/less/main-docs.less'
	])
		.pipe(less())
		.pipe(concat('docs.css'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
	gulp.watch('./src/less/**/*.less', ['less']);
	gulp.watch('./src/js/**/*.js', ['uglify']);
	gulp.watch('./src/*.html', ['copy']);
});

gulp.task('copy', function () {
	gulp.src(['./src/index.html'])
		.pipe(gulp.dest('./dist', {overwrite: true}));


	gulp.src(['./src/fonts/**/*'])
		.pipe(gulp.dest('./dist/fonts', {overwrite: true}));
});

gulp.task('uglify', function () {
	gulp.src(['./src/js/main.js', './node_modules/bootstrap/js/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));

	gulp.src([
		'./src/js/docs.js'
	])
		.pipe(uglify())
		.pipe(concat('docs.js'))
		.pipe(gulp.dest('./dist/js'));
});

