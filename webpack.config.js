const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry:'./src/js/index.js',
  output:{
    path:path.resolve(__dirname, 'src/main/resources/static'),
    filename: 'main.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/js/index.html",
      filename: "./index.html"
    })
  ]
};
