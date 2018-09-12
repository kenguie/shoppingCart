var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module:{
    loaders: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
			},
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
	},
	resolve: {
    extensions: ['.js', '.jsx']
	}
};