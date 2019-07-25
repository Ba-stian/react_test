const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV !== 'development';

const plugins = [
    autoprefixer({
        browserslistOpts: ['ie >= 8', 'last 4 version'],
    }),
];

if (process.env.NODE_ENV !== 'development') {
    plugins.push(cssnano({
        discardComments: {
            removeAll: true,
        },
    }));
}

module.exports = {
    test: /\.css$/,
    use: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins
            },
        }
    ],
};
