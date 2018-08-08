const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/script.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                 test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                         loader: 'css-loader',
                         options: {
                                modules: true
                            }
                     }
                    ]
                }
            ]       
        }
    };