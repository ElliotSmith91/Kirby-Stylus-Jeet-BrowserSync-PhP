module.exports = function (gulp, plugins, conf) {
    plugins.watch(conf.stylesSrcPath, ['styles'], console.log('running styles'));
    plugins.watch(conf.scriptSrcPath, ['scripts'], console.log('running scripts'));
    plugins.watch(conf.contentSrcPath, ['copy'], console.log('running copy'));
};
