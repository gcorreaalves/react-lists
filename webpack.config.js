const path = require('path')

module.exports = {
  mode: 'production',
  entry: './packages/core/index.ts',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    library: 'react-lists',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
}
