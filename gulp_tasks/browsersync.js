const browserSync = require('browser-sync');

module.exports = function (gulp, plugins, conf) {
  browserSync.init({
    proxy: conf.browserSyncProxy,
    port: conf.broswerSyncPort,
    open: true,
    notify: true,
  });
  gulp.watch(conf.paths.assets.styles.src, ['styles']);
};
