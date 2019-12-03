const path = require('path');
const Config = require('./config');

module.exports = {
  resolver: {
    sourceExts: [
      'js',
      'ts',
      'tsx',
    ],
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders: [
    path.resolve(Config.UI_KITTEN_PATH, 'theme'),
    path.resolve(Config.UI_KITTEN_PATH, 'ui'),
    path.resolve(Config.EVA_PATH, 'eva'),
    path.resolve(Config.EVA_PATH, 'processor'),
  ],
};
