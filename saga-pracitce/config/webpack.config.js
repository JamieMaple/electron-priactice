const HtmlWebpackPlugin = require('html-webpack-plugin')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  output: {
    path: resolve('app/build'),
    filename: '[name].[hash:5].js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json']
  },
  plugins: [
    new NyanProgressPlugin({
      debounceInterval: 60,
      nyanCatSays(progress, messages) {
        if (progress === 1) {
          return "Maple! Done!!"
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: {
          loader: 'tslint-loader',
          options: {
            typeCheck: true,
            emitErrors: true
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            cacheDirectory: true,
          }
        },
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(jp?eg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:base64:5].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:base64:5].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
}
