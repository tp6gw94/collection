const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('sass', function() {
    gulp.src('./src/sass/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream())
})

gulp.task('css', function() {
    gulp.src(['./node_modules/gridcss/dist/grid.min.css', './node_modules/remodal/dist/remodal-default-theme.css', './node_modules/remodal/dist/remodal.css'])
        .pipe(gulp.dest('./src/css'))
})


gulp.task('js', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/remodal/dist/remodal.min.js'])
        .pipe(gulp.dest('./src/js'))
        .pipe(browserSync.stream())
})

gulp.task('sever', ['sass'], function() {
    browserSync.init({
        server: './'
    })

    gulp.watch(['./src/sass/style.scss', './src/sass/*/*.scss', './src/js/*.js'], ['sass']).on('change', browserSync.reload)
    gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('default', ['sass', 'js', 'css', 'sever'])
