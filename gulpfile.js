var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var path = require('path');

gulp.task("default", function () {

    console.log('dirname', __dirname);
    return gulp.src(["server/**/*.es7"])
        .pipe(sourcemaps.init())
        .pipe(babel({
            blacklist: ['es6.classes'],
            optional: ['es7.asyncFunctions']
        }))
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: '.'
        }))
        .pipe(gulp.dest("server"));
});