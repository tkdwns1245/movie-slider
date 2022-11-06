var path = require('path');

module.exports = {
  entry: '/public/js/slider.js',
  output: {
    path: path.resolve(__dirname+"/public/js"),
    filename: '_bundle.js'
  }
};