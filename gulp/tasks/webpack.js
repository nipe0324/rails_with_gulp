var config        = require('./config');
var gulp          = require('gulp');
var webpack       = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var rev           = require('gulp-rev');
var uglify        = require('gulp-uglify');
var notify        = require('gulp-notify');

gulp.task('webpack', function() {
  return gulp.src(config.javascript.src)
      .pipe(webpack(webpackConfig))
      .pipe(uglify())
      .pipe(rev())
      .pipe(gulp.dest(webpackConfig.output.publicPath))
      .pipe(rev.manifest(config.rev.dest, config.rev.opts))
      .pipe(gulp.dest(config.publicAssets))
      .pipe(notify('finish webpack'));
});
