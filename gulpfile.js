var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browsersync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');


gulp.task('default',['styles', 'server'], function(){
	console.log("Gulp Task working");
	gulp.watch('public/scss/**/*.scss', ['styles']);
	gulp.watch(['public/**/*.js','public/**/*.html'], browsersync.reload);
});
 
gulp.task('styles', function () {
  return gulp.src('public/scss/style.scss')
    .pipe(plumber(function(error){
    	console.log('Shit happened');
    	this.emit("end");
    }))
    .pipe(sass({
    	outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
        browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7'],
        cascade: false
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('public/css'))
    .pipe(browsersync.stream());
});

gulp.task('server',function(){
	browsersync.init({
		proxy: 'localhost:3000',
		port: 4000
	});
	return nodemon({
		ext: 'js ejs json',
		ignore: ['public/*']
	})
	.on('restart', browsersync.reload);
});

// gulp.task('prefix', function () {
//     gulp.src('public/css/style.css')

//         .pipe(gulp.dest('public/css'))
// });