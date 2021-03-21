const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env']
                    },

                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        open: true,
        port: 8081,
        writeToDisk: true,
        hot: true
    },
};