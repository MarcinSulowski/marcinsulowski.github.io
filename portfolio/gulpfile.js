var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
    // dodajemy obsługę błedow, watch się nie zatrzyma
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});