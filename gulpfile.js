var gulp = require('gulp'),
    connect = require('gulp-connect');

var open =require('open');

gulp.task('connect', function() {
    connect.server();
});

var watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch('*.js')
    .pipe(connect.reload());
});

gulp.task('open', function(){
    gulp.src('index.html')
        .pipe(open());
});


gulp.task('default', ['connect','open']);

