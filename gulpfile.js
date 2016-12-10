esversion: 6;

// more advanced gulpfile using approach two from Callum Macrae http://macr.ae/article/splitting-gulpfile-multiple-files.html

const gulp = require('gulp'),
conf = require('./conf/gulpvars.json'),
gulpTasks = './gulp_tasks/';

var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

 // function which generates gulp tasks from load-plugins package
function getTask(task) {
  return require(gulpTasks + task)(gulp, plugins, conf);
}

gulp.task('scripts', getTask('scripts'));
gulp.task('styles', getTask('styles'));
gulp.task('copy', getTask('copy'));
gulp.task('watch', ['styles', 'scripts', 'copy'], getTask('watch'));
gulp.task('browsersync', ['phpconnect'], getTask('browsersync'));
gulp.task('phpconnect', ['copy'], getTask('phpconnect'));

gulp.task('default', ['browsersync', 'watch']);
