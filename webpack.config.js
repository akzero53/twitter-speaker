const webpack = require('webpack')

module.exports = {
  entry: {
    index: __dirname + '/src/index.js',
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      __dirname + '/view/js',
      __dirname + '/node_modules',
    ],
  },
  plugins: [],
};
