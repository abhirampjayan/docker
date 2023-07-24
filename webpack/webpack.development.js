const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    static: path.resolve(__dirname, 'dist'),
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: `./.env.development.local`,
    }),
  ],
};
