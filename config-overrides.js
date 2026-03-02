const path = require('path');

module.exports = function override(config) {
  // Force framer-motion to use CommonJS build so react-scripts/webpack resolves it correctly
  config.resolve.alias = {
    ...config.resolve.alias,
    'framer-motion': path.resolve(__dirname, 'node_modules/framer-motion/dist/cjs/index.js'),
  };
  return config;
};
