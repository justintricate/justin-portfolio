const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");

gulp.task("default", function () {
  return gulp
    .src("./src/style.css")
    .pipe(cssnano())
    .pipe(rename("min.css"))
    .pipe(gulp.dest("./out"));
});
