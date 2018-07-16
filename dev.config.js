const path = require('path');
const fs = require('fs');

var entryFiles = {};
const files = fs.readdirSync(path.resolve(__dirname, './app/javascripts/views'));
files.forEach(function(file) {
  entryFiles[file] = './app/javascripts/views/' + file;
})
console.log(entryFiles);
module.exports = {
  entry: entryFiles,
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
  mode: 'development',
  watch: true
};
