var config = require('./config');
var gulp  = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    proxy: config.browserSync.proxy // Railsサーバのホスト名を記載
  });

  gulp.watch(config.watch.stylesheetSass, ['compile-sass']);
  gulp.watch(config.watch.stylesheetScss, ['compile-scss']);
  gulp.watch(config.watch.javascript,     ['webpack']);

  // public配下のファイルが変更された場合画面をリロードする(必要に応じてwatch先を変更)
  gulp.watch(config.watch.browserSync).on('change', browserSync.reload);
});
