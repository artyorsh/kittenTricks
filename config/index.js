const path = require('path');

module.exports = {
  ENV: 'prod',
  UI_KITTEN_PATH: path.resolve(__dirname, '../node_modules/@ui-kitten/components'),
  EVA_PATH: path.resolve(__dirname, '../node_modules/@eva-design'),
};
