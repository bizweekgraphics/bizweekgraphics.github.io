var gulp = require('gulp');

module.exports = function() {
  return gulp.task('fonts', function() {
    gulp.src('./src/fonts/*')
      .pipe(gulp.dest('./build/fonts/'))
  });
}