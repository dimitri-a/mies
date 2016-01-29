var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');
open =require('gulp-open');

gulp.task('connect', function() {
    connect.server();
});


gulp.task('js', function() {
    gulp.src('scripts/*.js')
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('scripts/*.js');
});

gulp.task('op', function(){
    var options = {
        uri: 'localhost:8080',
        app: 'chrome'
    };
    gulp.src(__filename)
        .pipe(open(options));
});

gulp.task('default',['connect','op','watch','js']);

