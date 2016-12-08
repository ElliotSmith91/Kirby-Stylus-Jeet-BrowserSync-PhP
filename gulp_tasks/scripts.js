// const path = require('path');
//
// const gulp = require('gulp');
// const conf = require('../conf/gulp.conf');
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


module.exports = function (gulp, plugins) {
  return function () {
    gulp.src([
      basePaths.bower + 'jquery/dist/jquery.js'
    ])
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('./_site/assets/js'));
  };
};
