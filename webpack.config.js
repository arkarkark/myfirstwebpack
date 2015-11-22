'use strict';
var webpack = require('webpack'),
path = require('path');

var APP = __dirname + '/app';

module.exports = {
  context: APP,
  entry: {
    app: ['webpack/hot/dev-server', './index.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel!jshint',
        exclude: /node_modules|bower_components/
      }
    ]
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  }
};
