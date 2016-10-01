module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: '.',
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {presets: ['es2016']}
        }]
    }
};