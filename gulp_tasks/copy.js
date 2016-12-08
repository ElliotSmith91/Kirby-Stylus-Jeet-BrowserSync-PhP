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
      basePaths.dev + 'assets/fonts/**',
      basePaths.dev + 'assets/images/**',
      basePaths.dev +'site/**/**',
      basePaths.dev + 'content/**'
    ],{base : basePaths.dev})
    .pipe(watch(basePaths.dev, {base: basePaths.dev}))
    .pipe(gulp.dest(basePaths.dest));
    browserSync.reload();
  };
};


//Copy recursive folder and files from _dev to _site directories
// use / if tou want to copy all subdirectories... Not including CSS/ //JS assets as they are moved/ processed earlier
// gulp.task('copy', function(){
//   gulp.src([
//     basePaths.dev + 'assets/fonts/**',
//     basePaths.dev + 'assets/images/**',
//     basePaths.dev +'site/**/**',
//     basePaths.dev + 'content/**'
//   ],{base : basePaths.dev})
//   .pipe(watch(basePaths.dev, {base: basePaths.dev}))
//   .pipe(gulp.dest(basePaths.dest));
//   browserSync.reload();
// });
