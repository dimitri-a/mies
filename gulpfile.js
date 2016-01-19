var gulp = require('gulp');

var connect = require('gulp-connect');


gulp.task('myScripts', function () {
    gulp.src('scripts/*.js')
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watchMyScripts', function() {
    gulp.watch('scripts/*.js', ['myScripts']);
});


gulp.task('default', [ 'connect','watchMyScripts']);