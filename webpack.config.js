const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {//正则怎么可以用引号？
        test: /.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015']
          }
        },
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      // {
      //   test:/\.sass/,
      //   use:{
      //     loader:
      //   }
      // }

    ],
  
  }
};
