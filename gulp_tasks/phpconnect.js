module.exports = function (gulp, plugins, conf) {
  return function () {
    plugins.connectPhp.server({base: '_site', port:conf.phpPort, keepalive: true});
  };
};
