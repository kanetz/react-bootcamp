'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webDir = path.resolve(__dirname, 'web');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        app: `${webDir}/scripts/index.js`,
    },
    output: {
        path: distDir,
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: 'last 2 Chrome versions',
                                }
                            }],
                            'react',
                            'flow',
                        ],
                        plugins: [
                            'transform-runtime',
                            'transform-object-rest-spread',
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${webDir}/index.html`,
            inject: 'body',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
};