var del = require('del');
module.exports = function(gulp, plugins, conf) {

  // clean all relevant paths/ directories in _site
  return function () {
    return del([
      conf.paths.assets.fonts.dest,
      '!' + conf.paths.dest + 'assets/fonts',
      conf.paths.assets.images.dest,
      '!' + conf.paths.dest + 'assets/images',
      conf.paths.site.blueprints.dest,
      '!' + conf.paths.dest + 'site/blueprints',
      conf.paths.site.controllers.dest,
      '!' + conf.paths.dest + 'site/controllers',
      conf.paths.site.snippets.dest,
      '!' + conf.paths.dest + 'site/snippets',
      conf.paths.site.templates.dest,
      '!' + conf.paths.dest + 'site/templates',
      conf.paths.content.dest,
      '!' + conf.paths.dest + 'content',
    ]);
  };
};
