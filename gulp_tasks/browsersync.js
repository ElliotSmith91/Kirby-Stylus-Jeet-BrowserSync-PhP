const browserSync = require('browser-sync').create();
//const gulp = require('gulp');
// const watch = require('gulp-watch');
//var conf = require('../conf/gulp.conf.js');
const browserSyncProxy = '127.0.0.1:8010';

var appFiles = {
  styles: paths.styles.src + '**/*.styl',
  scripts: paths.scripts.src + '*.js'
};


module.exports = function (gulp, plugins) {
  return function () {
    browserSync.init({
      proxy: browserSyncProxy,
      port: 8080,
      open: true,
      notify: false
    });

    gulp.watch(appFiles.styles, ['stylus']);
  };
};
