var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=[path][name].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ico$|manifest\.json$|\.wav$|\.mp3$/,
        loader: "file-loader",
      },
      {
        test: /\.json?$/,
        loader: "json-loader"
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }

};
