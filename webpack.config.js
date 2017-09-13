const { resolve } = require('path');

module.exports = {
    entry: './app/Resources/js/app.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'web', 'build'),
        publicPath: '/build/',
    },
    devServer: {
        contentBase: resolve(__dirname, 'web'),
        port: 8080,
        proxy: {
            '/': {
                target: '*',
                router: req => `${req.protocol}://${req.hostname}:8000`,
            },
        },
    },
};
