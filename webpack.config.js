module.exports = {
    entry:  './app/app.js',
    output: {
        path:     __dirname,
        filename: 'index.js'
    },
    module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015']
	      }
	    }
	  ]
	}
};