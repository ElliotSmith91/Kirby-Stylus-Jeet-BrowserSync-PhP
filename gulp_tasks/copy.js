const browserSync = require('browser-sync');
//
// const basePaths = {
//   bower: './bower_components/',
//   dev: './_dev/',
//   dest: './_site/'
// };
//
// //defining source file paths
// paths = {
//   styles: {
//     src: basePaths.dev + 'assets/styl/',
//     dest: basePaths.dest + 'assets/css/'
//   },
//   images: {
//     src: basePaths.dev +'assets/images/',
//     dest: basePaths.dest + 'assets/images/'
//   },
//   scripts: {
//     src: basePaths.dev +'assets/scripts/',
//     dest: basePaths.dest +'assets/scripts/'
//   },
//   content: basePaths.dev +'content/**'
// };


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
