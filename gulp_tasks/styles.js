var koutoSwiss = require( "kouto-swiss" );
const browserSync = require('browser-sync');

const basePaths = {
  bower: './bower_components/',
  dev: './_dev/',
  dest: './_site/'
};

exports.paths = {
  bower: './bower_components/',
  dev: './_dev/',
  dest: './_site/',
  tasks: 'gulp_tasks'
};

//defining source file paths
paths = {
  styles: {
    src: basePaths.dev + 'assets/styl/',
    dest: basePaths.dest + 'assets/css/'
  },
  images: {
    src: basePaths.dev +'assets/images/',
    dest: basePaths.dest + 'assets/images/'
  },
  scripts: {
    src: basePaths.dev +'assets/scripts/',
    dest: basePaths.dest +'assets/scripts/'
  },
  content: basePaths.dev +'content/**'
};

var appFiles = {
  styles: paths.styles.src + '**/*.styl',
  scripts: paths.scripts.src + '*.js'
};

module.exports = function (gulp, plugins) {
  return function () {
    // dev variables
    var isProduction = true;
    var stylusStyle = 'compressed';
    var sourceMap = false;
    if(plugins.util.env.dev === true) {
      stylusStyle = 'expanded';
      sourceMap = true;
      isProduction = false;
    }
    gulp.src(
      appFiles.styles
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
    .pipe(gulp.dest('./_site/assets/css'));
  };
};
