var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./examples/src/app.js"
  ],

  output: {
    path: path.resolve("./examples/dist"), // Must be an absolute path
    filename: "app.js",
    publicPath: "/examples/dist"
  },
  
  module: {
    loaders: [
      { test: /\.js$/, loaders: ["react-hot", "babel-loader"/*, "eslint-loader"*/], exclude: /node_modules/ },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("app.css", { allChunks: true })
  ]
};
