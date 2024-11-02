const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    },
    devServer: {
        port: 3000,
        allowedHosts: 'all'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    }
}