const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('browser', () => {
    browserSync.init({server: './', open: false});
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('observar', () => {
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['index.html', 'dist/**/*'], browserSync.reload);
});

gulp.task('default', ['sass', 'browser', 'observar']);