const webpack = require('webpack')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const HappPack = require('happypack')
const ExtractPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  output: {
    path: resolve('app/build'),
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json']
  },
  plugins: [
    new NyanProgressPlugin({
      debounceInterval: 180,
      nyanCatSays(progress, messages) {
        if (progress === 1) {
          return "Maple! Done!!"
        }
        return 'waiting...'
      }
    }),
    new ExtractPlugin('main.css'),
    new HappPack({
      id: 'jsx',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        'eslint-loader'
      ]
    }),
    new HappPack({
      id: 'styles',
      loaders: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            module: true,
            minimize: isDev ? false : true,
            localIdentName: isDev
            ? '[name]__[local]__[hash:base64:5]'
            : '[hash:base64]',
          }
        },
        'postcss-loader'
      ]
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'tslint-loader',
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            usePrecompiledFiles: true
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=jsx'
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     options: {
        //       cacheDirectory: true
        //     }
        //   },
        //   'eslint-loader'
        // ]
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: 'happypack/loader?id=styles'
        })
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
