// const path = require('path');
//
// const gulp = require('gulp');
// var php  = require('gulp-connect-php');
// var watch = require('gulp-watch');
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

var appFiles = {
  styles: paths.styles.src + '**/*.styl',
  scripts: paths.scripts.src + '*.js'
};

module.exports = function (gulp, plugins) {
  return function () {
    gulp.watch(appFiles.styles, ["stylus"]);
    gulp.watch(appFiles.scripts, ["scripts"]);
    gulp.watch(paths.content, ['copy']);
  };
};
