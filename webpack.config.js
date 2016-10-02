module.exports = {
     entry: './src/app.js',
     output: {
         path: './dist',
         filename: 'app.js',
     },
     module: {
         loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            }
         ]
     }
 }