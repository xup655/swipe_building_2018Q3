var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('sass', function() {

  return gulp.src('resourse/sass/*.scss')
          .pipe(scss())
          .pipe(gulp.dest('assets/css'))

});

gulp.task('default', ['sass'], function() {
    gulp.watch('resourse/sass/**/*.scss', ['sass']);
})