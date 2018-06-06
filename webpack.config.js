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
        }
    ]
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'src/main/resources/static'),
    port: 3000,
    proxy:{
      "/api":{
        target: "http://localhost:8080"
      }
    }
  }
};
