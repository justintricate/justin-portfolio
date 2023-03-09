const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");

function minifyCss() {
  return gulp
    .src("./src/style.css")
    .pipe(cssnano())
    .pipe(rename("min.css"))
    .pipe(gulp.dest("./out"));
}

function watch() {
  gulp.watch("./src/style.css", minifyCss);
}

exports.default = minifyCss;
exports.watch = watch;
