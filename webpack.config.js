var path = require('path');
const webpack = require('webpack');

module.exports = {
    // Change to your "entry-point".
    entry: './src/index',
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};