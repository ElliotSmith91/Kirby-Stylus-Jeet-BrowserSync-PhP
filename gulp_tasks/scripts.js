// const path = require('path');
//
// const gulp = require('gulp');
// const conf = require('../conf/gulp.conf');


module.exports = function (gulp, plugins, conf) {
  return function () {
    gulp.src([
      conf.bower + 'jquery/dist/jquery.js'
    ])
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest(conf.scriptsDestPath));
  };
};
