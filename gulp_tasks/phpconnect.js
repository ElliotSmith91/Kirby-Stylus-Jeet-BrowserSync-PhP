// const path = require('path');
//
// const gulp = require('gulp');
// var php  = require('gulp-connect-php');
// const conf = require('../conf/gulp.conf');


module.exports = function (gulp, plugins, conf) {
  return function () {
    plugins.connectPhp.server({base: '_site', port:conf.phpPort, keepalive: true});
  };
};
