// const path = require('path');
//
// const gulp = require('gulp');
// var php  = require('gulp-connect-php');
// const conf = require('../conf/gulp.conf');

//defining proxy and ports for browserSync and php server
const phpPort = 8010;

module.exports = function (gulp, plugins) {
  return function () {
    php.server({base: '_site', port:phpPort, keepalive: true});
  };
};
