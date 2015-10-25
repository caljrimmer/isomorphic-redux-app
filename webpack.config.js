var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        optional: ['runtime'],
        stage: 2,
        env: {
          development: {
            plugins: [
              'react-transform'
            ],
            extra: {
              'react-transform': {
                transforms: [{
                  transform:  'react-transform-hmr',
                  imports: ['react'],
                  locals:  ['module']
                }]
              }
            }
          }
        }
      }
    },
    {
       test: /\.css$/, 
       loader: 'style-loader!css-loader'
    }]
  }
};

if (process.env.NODE_ENV === 'production') {
  
  webpackConfig.entry = [
    './src/client/index.js'
  ]
  
  webpackConfig.plugins.unshift(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }));

  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

}else{

  webpackConfig.entry = [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ]

  webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());
  
}

module.exports = webpackConfig;