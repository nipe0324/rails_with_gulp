var config = require('./config');

module.exports = {
  // エントリファイルを記載(複数記載できます)
  entry: {
    application: './' + config.gulpAssets + '/javascripts/application'
  },
  // 出力先を記載。filenameで作成されたファイルを指定
  output: {
    filename:   '[name].bundle.js',
    publicPath: config.javascript.dest
  },
  // 対照するファイル(extension: 拡張子を指定)
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // loadersを指定することで、es6, coffeeやjsxといったファイルをjsに変換できます
  module: {
    loaders: [
      { test: /\.js?$/, loader: "babel?presets[]=es2015" }
    ]
  }
};
