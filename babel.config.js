const path = require('path');
const Config = require('./config');

// FIXME: Resolve `transform[stderr]: Could not resolve` command-line warnings.
// FIXME: Reproducible when starting with clearing cache (npm start -- -c)
//
// TODO: Framework path aliasing even not needed here. Replace?
// TODO: Replace nested package.json-s with aliases

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    '@kitten/theme': path.resolve(Config.UI_KITTEN_PATH, 'theme'),
    '@kitten/ui': path.resolve(Config.UI_KITTEN_PATH, 'ui'),
    '@eva-design/eva': path.resolve(Config.EVA_PATH, 'eva'),
    '@eva-design/processor': path.resolve(Config.EVA_PATH, 'processor'),
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'babel-preset-expo',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
  ];

  return { presets, plugins };
};
