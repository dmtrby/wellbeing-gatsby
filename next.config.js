const path = require('path');
const withImages = require('next-images');

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  withImages: withImages(),
};
