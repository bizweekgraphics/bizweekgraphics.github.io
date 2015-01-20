var gulp = require('./gulp')([
  'browser-sync',
  'html',
  'watch',
  'browserify',
  'vendor',
  'sass',
  'jshint',
  'imagemin',
  'fonts'
])

gulp.task('default', ['fonts', 'html', 'sass', 'jshint', 'vendor', 'browserify', 'browser-sync', 'watch']);