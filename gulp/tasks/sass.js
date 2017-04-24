var gulp = require('gulp');
var sass = require('gulp-sass');
var size = require('gulp-size');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var reload = require('browser-sync').reload;


module.exports = function() {
  gulp.task('sass', function () {
    gulp.src('./src/styles/*.scss')
      .pipe(plumber())
      .pipe(sass({
        errLogToConsole: true,
        style: 'compressed',
      }))
      .pipe(autoprefixer())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./build/styles'))
      .pipe(size())
      .pipe(reload({stream: true}));
  });
}