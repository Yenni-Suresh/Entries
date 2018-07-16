const path = require('path');

module.exports = {
  entry: './app/javascripts/views/pagesIndex.js',
  output: {
    path: path.resolve(__dirname, './app/assets/javascripts/views'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'production',
  watch: false
};
