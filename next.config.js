const path = require('path');
const withImages = require('next-images');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  withImages: withImages(),
};
