const browserSync = require('browser-sync');

module.exports = function (gulp, plugins, conf) {
  browserSync.init({
    proxy: conf.browserSyncProxy,
    port: conf.broswerSyncPort,
    open: true,
    notify: false,
    snippetOptions: {
      ignorePaths: ['panel/**', 'site/accounts/**']
    },
  });
  gulp.watch(conf.paths.assets.styles.src, ['styles']);
};
