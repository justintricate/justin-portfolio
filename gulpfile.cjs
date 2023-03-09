const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");

gulp.task("minify-css", function () {
  return gulp
    .src("./src/style.css")
    .pipe(cssnano())
    .pipe(rename("min.css"))
    .pipe(gulp.dest("./out"));
});

gulp.task("watch", function () {
  gulp.watch("./src/style.css", gulp.series("minify-css"));
});

gulp.task("default", gulp.series("minify-css", "watch"));
