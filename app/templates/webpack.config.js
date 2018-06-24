const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./package.json')

const paths = {
  src: path.resolve(__dirname, 'src'),
  html: path.resolve(__dirname, 'public/index.html'),
  css: path.resolve(__dirname, 'src/app/styles'),
  js: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}

const names = {
  media: 'static/media/[name].[hash:8].[ext]',
  css: 'static/css/[name].css',
  js: 'static/js/[name].[chunkhash:8].js',
}

const publicPath = `//fe.imdada.cn/${process.env.npm_package_name}/`

const common = {
  entry: {
    app: paths.js,
  },
  output: {
    path: paths.dist,
  },
  resolve: {
    alias: {
      src: paths.src,
    },
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.vue'],
    symlinks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html,
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/**/*',
        to: 'static/media',
        ignore: ['*.html'],
        flatten: true,
      },
    ]),
  ],
}

const development = {
  output: {
    path: paths.dist,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: paths.js,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { failOnError: true },
        include: paths.js,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        include: paths.js,
      },
      {
        test: /\.s?css$/,
        include: [paths.css, /node_modules/],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.s?css$/,
        exclude: [paths.css, /node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: names.media,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: names.media,
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: false,
    hot: true,
    stats: 'errors-only',
    proxy: config.proxy || {},
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: '/static/media',
    }),
  ],
}

const production = {
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: paths.js,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: paths.js,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: paths.js,
      },
      {
        test: /\.s?css$/,
        include: [paths.css, /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.s?css$/,
        exclude: [paths.css, /node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: names.media,
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: names.media,
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([paths.dist]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      DEBUG: JSON.stringify(false),
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: names.css,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module =>
        module.context && module.context.includes('node_modules'),
    }),
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /zh-cn/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      children: true,
      async: 'common',
      minChunks: module =>
        module.context && module.context.includes('node_modules'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath,
    }),
    new InlineManifestWebpackPlugin(),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: `${publicPath}static/media`,
    }),
  ],
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}

module.exports = env =>
  env.development ? merge(common, development) : merge(common, production)
