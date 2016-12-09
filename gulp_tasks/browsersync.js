const browserSync = require('browser-sync');
//const gulp = require('gulp');
// const watch = require('gulp-watch');
//var conf = require('../conf/gulp.conf.js');

module.exports = function (gulp, plugins, conf) {
  browserSync.init({
    proxy: conf.browserSyncProxy,
    port: 8080,
    open: true,
    notify: true,

  });
  console.log("running scripts");
  gulp.watch(conf.stylesSrcPath, ['styles']);
};
