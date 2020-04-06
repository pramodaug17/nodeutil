var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
// var jest = require("jest");

gulp.task("compile", function() {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("test", (done) => {
    return gulp.src([
        "test/**/*spec.js"
    ]).pipe(jasmine());
});

gulp.task("default", gulp.series(["compile", "test"]));
