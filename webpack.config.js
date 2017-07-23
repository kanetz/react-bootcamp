'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractVendorCssPlugin = new ExtractTextPlugin('vendor-bundle.css');
const extractAppCssPlugin = new ExtractTextPlugin('[name]-bundle.css');

const webDir = path.resolve(__dirname, 'web');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        app: `${webDir}/index.js`,
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
                test: /\.css/,
                include: /node_modules/,
                use: extractVendorCssPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: 'css-loader',
                    }
                ),
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: extractAppCssPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            'css-loader?modules=true&localIdentName=[local]--[hash:base64:5]&sourceMap=true',
                            'postcss-loader',
                        ],
                    }
                ),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
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
        extractVendorCssPlugin,
        extractAppCssPlugin,
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    resolve: {
        alias: {
            '@components': `${webDir}/components`,
        },
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
};
