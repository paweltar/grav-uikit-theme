module.exports = {
  entry: './src/scripts/main.js',
  output: {
      path:  __dirname,
      filename: 'main.js'
  },
  module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
  }
}
