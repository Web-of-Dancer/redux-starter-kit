// less编译，使用方法: gulp
var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
	gulp.src('less/common.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('css'));
});

gulp.task('lesswatch', function () {
	gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'lesswatch']);