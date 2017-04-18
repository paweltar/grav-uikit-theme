var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var cssnext = require('postcss-cssnext');


gulp.task('css', function() {

  var postCssOptions = [
    cssnext({ browsers: ['last 2 versions', '> 2%'] })
  ];

  return gulp.src('src/styles/main.css')
  .pipe( sourcemaps.init() )
  .pipe( postcss(postCssOptions) )
  .pipe( sourcemaps.write('.') )
  .pipe( gulp.dest('css') );
});

gulp.task('clean:dist', function() {
  return del.sync('css');
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*', ['css']);
});

gulp.task('run', ['css']);

gulp.task('default', function() {
  runSequence('clean:dist', ['run', 'watch']);
});

gulp.task('build', function() {
  runSequence('clean:dist', 'run');
});
