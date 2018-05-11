const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano');

gulp.task('sass', function () {
    
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('minify-css', function () {

    return gulp.src('css/styles.css')
        .pipe(cssnano())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'))
});