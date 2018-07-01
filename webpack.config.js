'use strict';
const webpack = require('webpack');
const Autoprefixer = require("autoprefixer");
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const mode = process.env.NODE_ENV === "dev"? "development":"production";

module.exports = {
    mode: mode,
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                Autoprefixer()
                            ]
                        }

                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg|woff2?)$/,
                loader: "file-loader"
            },
        ]
    },
    resolve: {
        alias: {
            "vue$": 'vue/dist/vue.esm.js',
            "theme": path.resolve(__dirname, "src/theme"),
            "static": path.resolve(__dirname, "src/static")
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};
