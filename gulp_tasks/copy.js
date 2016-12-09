const browserSync = require('browser-sync');

module.exports = function (gulp, plugins, conf) {
    gulp.src([
      conf.fontsSrcPath,
      conf.imgSrcPath,
      conf.siteSrcPath,
      conf.contentSrcPath
    ],{base : conf.dev})
    .pipe(plugins.watch(conf.dev, {base: conf.dev}))
    .pipe(gulp.dest(conf.dest));
    browserSync.reload();
  };
