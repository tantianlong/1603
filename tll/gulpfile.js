var gulp = require('gulp');
var server = require('gulp-webserver');
var scss = require('gulp-sass');
var uglify = require('gulp-uglify');
var minCss = require('gulp-clean-css');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mock = require('./mock/data');
console.log(mock);
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 6060,
            hostname: 'localhost',
            open: true,
            // middleware: function(req, res, next) {
            //     if (req.url === '/favicon.ico') {
            //         return;
            //     }
            //     var pathname = url.parse(req.url).pathname;
            //     pathname == pathname == '/' ? '/index.html' : pathname;
            // }
        }))
});
gulp.task('scss', function() {
    gulp.src('src/scss/*.scss')
        .pipe(scss())
        .pipe(minCss())
        .pipe(gulp.dest('src/css'))
})
gulp.task('watch', function() {
    gulp.src('src/scss/*.scss')
});
gulp.task('default', ['server', 'scss']);