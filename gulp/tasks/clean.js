var config = require('./config');
var gulp = require('gulp');
var del  = require('del');

// gulp.task('<タスク名>', function() { <タスクの処理> }) でgulpのタスクを作成
gulp.task('clean', function() {
  return del(config.publicAssets);
});
