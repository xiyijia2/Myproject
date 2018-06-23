const gulp = require("gulp"),
sass = require("gulp-sass"),
connect = require("gulp-connect"),
concat = require("gulp-concat"),
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
cleancss = require("gulp-clean-css"),
imagemin = require("gulp-imagemin"),
babel = require("gulp-babel"),
sourcemaps = require("gulp-sourcemaps")

gulp.task("html",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload())
})
gulp.task("copy-html",function(){
	gulp.src("html/**")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload())
})
gulp.task("sass",function(){
	gulp.src("sass/**")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
})

//压缩图片
gulp.task("image",function(){
	gulp.src("img/**")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload())
})

//压缩js
gulp.task("scripts",function(){
	gulp.src("js/**")
	.pipe(sourcemaps.init())
	.pipe(babel({"presets":["es2015"]}))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/js"))
	
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	})
})
gulp.task("watch",function(){
	gulp.watch("index.html",["html"])
	gulp.watch("sass/**",["sass"])
})
gulp.task("default",["watch","server"])

