var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var browserSync = require('browser-sync').create();
var stylus = require('gulp-stylus');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var pug = require('gulp-pug');
var cleanCss = require('gulp-clean-css');
var combineMQ = require('gulp-combine-mq');
var unCss = require('gulp-uncss');
var koutoSwiss = require( "kouto-swiss" );
var php  = require('gulp-connect-php');
var watch = require('gulp-watch');

//defining proxy and ports for browserSync and php server
var phpPort = 8010;
var browserSyncProxy = '127.0.0.1:8010';

//defining some commonly used paths
var basePaths = {
  bower: './bower_components/',
  dev: './_dev/',
  dest: './_site/'
};

var devEdit = {
  images: basePaths.dev + 'assets/images/**',
  fonts: basePaths.dev + 'assets/fonts/**',
  content: basePaths.dev + 'content/**/**',
  site: basePaths.dev + 'site/**/**'
};

//defining source file paths
var paths = {
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

// dev variables

var isProduction = true;
var stylusStyle = 'compressed';
var sourceMap = false;
if(gulpUtil.env.dev === true) {
  stylusStyle = 'expanded';
  sourceMap = true;
  isProduction = false;
}


/**
* Compile stylus files from dev to site staging
*/
gulp.task('stylus', function(){
  return gulp.src(
    appFiles.styles
  )
  .pipe(stylus({
    onError: browserSync.notify,
    "use": koutoSwiss()
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
  .pipe(concatCss('app.css'))
  .pipe(isProduction ? (combineMQ(
    {log: true})) : gulpUtil.noop())
  .pipe(isProduction ? (unCss({
    html: ['http://localhost:3001/']
  })) : gulpUtil.noop())
  .pipe(isProduction ? (cleanCss()): gulpUtil.noop())
  .pipe(gulp.dest('./_site/assets/css'))
  .pipe(browserSync.stream());
});

/**
* Compile pug files from dev to site staging
*/
// gulp.task('pug', function(){
//   return gulp.src(src.pug)
//   .pipe(pug({
//     pretty: true
//   }))
//   .pipe(gulp.dest(basePaths.dest));
// });

gulp.task('scripts', function(){
  gulp.src([
    basePaths.bower + 'jquery/dist/jquery.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./_site/assets/js'));
});

gulp.task('watch', ['stylus', 'scripts', 'copy'], function() {
  gulp.watch(appFiles.styles, ["stylus"]);
  gulp.watch(appFiles.scripts, ["scripts"]);
  gulp.watch(paths.content, ['copy']);
  // gulp.watch(src.pug, ['pug']);
});

gulp.task('php', function(){
  php.server({base: '_site', port:phpPort, keepalive: true});
});

//Copy recursive folder and files from _dev to _site directories
// use / if tou want to copy all subdirectories... Not including CSS/ //JS assets as they are moved/ processed earlier
gulp.task('copy', function(){
  gulp.src([
    basePaths.dev + 'assets/fonts/**',
    basePaths.dev + 'assets/images/**',
    basePaths.dev +'site/**/**',
    basePaths.dev + 'content/**'
  ],{base : basePaths.dev})
  .pipe(watch(basePaths.dev, {base: basePaths.dev}))
  .pipe(gulp.dest(basePaths.dest));
  browserSync.reload();
});

gulp.task('serve', ['php'], function(){
  browserSync.init({
    proxy: browserSyncProxy,
    port: 8080,
    open: true,
    notify: false
  });

  gulp.watch(appFiles.styles, ['stylus']);
});

gulp.task('default', ['serve', 'watch']);
