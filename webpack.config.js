

module.exports = {
    entry:  './app/app.js',
    output: {
        path:     __dirname,
        filename: 'index.js',
        publicPath: "/assets/"
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
	    },
	    {
	      test: /\.css$/,
		  loader: ["style", "css"]
	    }
	  ]
	},
	devServer: { 
		inline: true 
	},
	resolve: {
		extensions: ['', '.js', '.es6', '.css']
	}
};