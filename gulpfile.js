esversion: 6;


// more advanced gulpfile using approach two from Callum Macrae http://macr.ae/article/splitting-gulpfile-multiple-files.html

const gulp = require('gulp'),
conf = require('./conf/gulp.conf.js'),
gulpTasks = './gulp_tasks/';

var plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require(gulpTasks + task)(gulp, plugins);
}


gulp.task('scripts', getTask('scripts'));
gulp.task('styles', getTask('styles'));
gulp.task('copy', getTask('copy'));
gulp.task('browsersync',['phpconnect'], getTask('browsersync'));
gulp.task('phpconnect', getTask('phpconnect'));

gulp.task('default', ['styles']);
