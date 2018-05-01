const gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

gulp.task('sass', function () {
    
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('minify-js', function () {
    
    return gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('js/'))
});

gulp.task('minify-css', function () {

    return gulp.src('css/styles.css')
        .pipe(cssnano())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'))
});