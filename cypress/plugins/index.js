const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  require('@cypress/react/plugins/react-scripts')(on, config);
  return config;
};
