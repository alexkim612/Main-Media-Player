var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: ["babel-plugin-styled-components"],
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

// const path = require('path');

// module.exports = {
//   entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//     ],
//   },
//   mode: 'development',
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// };