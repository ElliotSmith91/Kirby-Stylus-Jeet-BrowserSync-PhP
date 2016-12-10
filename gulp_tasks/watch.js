module.exports = function (gulp, plugins, conf) {
    plugins.watch(conf.paths.assets.styles.src, ['styles']);
    plugins.watch(conf.paths.assets.scripts.src, ['scripts']);
    plugins.watch(conf.paths.content.src, ['copy']);
};
