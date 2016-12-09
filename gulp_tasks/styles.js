const koutoSwiss = require( "kouto-swiss" );
const browserSync = require('browser-sync');

module.exports = function (gulp, plugins, conf) {
  return function () {
    // dev variables
    var isProduction = true;
    var stylusStyle = 'compressed';
    var sourceMap = false;
    if(plugins.util.env.dev === true) {
      stylusStyle = 'expanded';
      sourceMap = false;
      isProduction = false;
    }
    gulp.src(
      conf.stylesSrcPath
    )
    .pipe(plugins.stylus({
      onError: browserSync.notify,
      "use": koutoSwiss()
    }))
    .pipe(plugins.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(plugins.concatCss('app.css'))
    .pipe(isProduction ? (plugins.combineMq({log: true})) : plugins.util.noop())
    .pipe(isProduction ? (plugins.uncss({html: ['http://localhost:3001/']})) : plugins.util.noop())
    .pipe(isProduction ? (plugins.cleanCss()): plugins.util.noop())
    .pipe(gulp.dest(conf.stylesDestPath))
    .pipe(browserSync.stream());
  };
};
