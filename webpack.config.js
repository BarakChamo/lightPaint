var webpack           = require('webpack'),
    path              = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    OnBuildPlugin     = require('on-build-webpack'),
    child_process     = require('child_process'),
    electronTarget    = require('webpack-target-electron-renderer')

var first = true

var options = {
    // Compiler ID
    name: 'app',

    // specify build target is NW.js
    // target: 
    
    // Makes sure errors in console map to the correct file and line number
    devtool: 'source-map',

    // Define entry points
    entry: {
        // App entry point
        app: [
            // Main app
            path.resolve(__dirname, 'app', 'index.jsx')
        ],

        // Common vendor packages
        vendor: [
            'react/addons'
        ]
    },
    
    // Set modules output
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js'
    },
    
    // Define module loaders
    module: {
        loaders: [
            {   // ES6 Loader
                test: /\.jsx?$/, 
                exclude: /(node_modules|bower_components)/, 
                loader: 'babel?optional[]=runtime'
            },

            {   // JSON Loader
                test: /\.json$/, 
                loader: 'json'
            },

            {   // CSS Loader
                test: /\.css$/,  
                loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
            },

            {   // SASS Loader
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },

            {   // Fonts Loader
                test: /\.woff2$/,
                loader: 'url?limit=100000'
            }
        ]
    },

    // Setting up resolution
    resolve: {
        modulesDirectories: [
            'node_modules',
            'resources',
            'app'
        ],
        extensions: ['', '.js', '.jsx']
    },

    // Set up plugins
    plugins: [
        // Define module globals
        new webpack.ProvidePlugin({
            'React': 'react'
        }),

        // Deduplication
        new webpack.optimize.DedupePlugin(),


        // Chunk out vendor code
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),

        // Extract CSS files
        new ExtractTextPlugin("styles.css"),

        // Hot module replacement
        // new webpack.HotModuleReplacementPlugin(),

        new OnBuildPlugin(function(stats) {
            console.log('Building app...')

            if (first) {
                child_process.spawn('./build', ['--run'])
                first =false
            }

            // child_process.spawn('./build')
        })
    ]
}

options.target = electronTarget(options)

module.exports = options