var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename');
    
gulp.task('compile', function() {
  return gulp
    .src('src/**/*.es6')
    .pipe(babel())
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['compile']);