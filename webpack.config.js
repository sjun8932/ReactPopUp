const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    name: 'reactPopUp-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test:/\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
            },
        },{
            test:/\.css$/,
            use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
        }],

    }, plugins: [new MiniCssExtractPlugin({filename:"./style.css"})],


    output: {
        path: path.join(__dirname,'dist'),
        filename: 'app.js'
    },
};