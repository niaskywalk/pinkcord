var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('default',['sass','prefix'], function(){
	console.log("Gulp Task working");
	gulp.watch('public/css/style.css',['prefix']);
	gulp.watch('public/scss/style.scss', ['sass']);
});
 
gulp.task('sass', function () {
  return gulp.src('public/scss/style.scss')
    .pipe(sass({
    	outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('prefix', function () {
    gulp.src('public/css/style.css')
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
});