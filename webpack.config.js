'use strict';

const path = require('path');
const webpack = require('webpack');
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: `${webDir}/index.html`,
            inject: 'body',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    resolve: {
        alias: {
            '@components': `${webDir}/scripts/components`,
        },
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
};