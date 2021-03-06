const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: mode,
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'new webpack template',
      favicon: './src/images/lift.ico',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),

    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // Styles
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },

      // Images
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      // HTML
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              '...',
              {
                tag: 'audio',
                attribute: 'src',
                type: 'src',
              },
            ],
          },
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        deleteOriginalAssets: true,
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp'],
            },
          },
        ],
      }),
    ],
  },

  devtool: mode ? 'eval-source-map' : 'none',

  devServer: {
    historyApiFallback: false,
    open: true,
    compress: true,
    hot: false,
    port: 8080,
    liveReload: true,
    watchFiles: ['src/*.html'],
  },
};
