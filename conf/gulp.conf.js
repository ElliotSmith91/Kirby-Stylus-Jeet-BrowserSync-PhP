const path = require('path');
const gutil = require('gulp-util');



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


// dev variables

var isProduction = true;
var stylusStyle = 'compressed';
var sourceMap = false;
if(gutil.env.dev === true) {
  stylusStyle = 'expanded';
  sourceMap = true;
  isProduction = false;
}

exports.path = {};
for (const pathName in exports.paths) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}


exports.errorHandler = function (title) {
  return function (eer) {
    gutil.log(gutil.colors.red(`[${title}]`), err.toString());
    this.emit('end');
  };
};
