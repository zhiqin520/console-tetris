const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootDir = path.resolve(__dirname);

module.exports = {
    entry: { app: path.resolve(rootDir, 'src/index.js') },
    mode: 'development',
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: 'static/[name]-[hash].js',
        chunkFilename: 'static/[id]-[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                    useBuiltIns: 'usage',
                                    corejs: {
                                        version: 3,
                                        proposals: true
                                    }
                                }
                            ]
                        ],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', { loose: true }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, 'static/index.html')
        })
    ],
    devServer: {
        port: 8080,
        hot: true,
        compress: true,
        stats: {
            colors: true,
            cached: false,
            cachedAssets: false
        }
    }
};
