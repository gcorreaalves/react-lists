const path = require('path')

module.exports = {
  mode: 'production',
  entry: './packages/core/index.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    library: 'react-lists',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
}
