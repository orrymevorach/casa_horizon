const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './dev/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app_bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      components: path.resolve(__dirname, './dev/components/'),
      styles: path.resolve(__dirname, './styles/'),
      data: path.resolve(__dirname, './dev/data'),
      utils: path.resolve(__dirname, './dev/utils'),
      context: path.resolve(__dirname, './dev/context/'),
      constants: path.resolve(__dirname, './dev/constants.js'),
    },
  },
  devtool: 'eval-source-map',
};
