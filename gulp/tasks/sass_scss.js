var config = require('./config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rev  = require('gulp-rev');
var minifyCss = require('gulp-minify-css');
var notify    = require('gulp-notify');

gulp.task('compile-sass', function() {
  return gulp.src(config.stylesheet.srcSass)
      .pipe(sass({ indentedSyntax: true, errLogToConsole: true }))
      .pipe(minifyCss())
      .pipe(rev())
      .pipe(gulp.dest(config.stylesheet.dest))
      .pipe(rev.manifest(config.rev.dest, config.rev.opts))
      .pipe(gulp.dest(config.publicAssets))
      .pipe(notify('finish compile-sass'));
});

gulp.task('compile-scss', function() {
  return gulp.src(config.stylesheet.srcScss)
      .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
      .pipe(minifyCss())
      .pipe(rev())
      .pipe(gulp.dest(config.stylesheet.dest))
      .pipe(rev.manifest(config.rev.dest, config.rev.opts))
      .pipe(gulp.dest(config.publicAssets))
      .pipe(notify('finish compile-scss'));
});
