var gulp = require("gulp");
var ts = require("gulp-typescript");
var jasmine = require("gulp-jasmine");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", function() {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    return gulp.src([
        "test/**/*spec.js"
    ]).pipe(jasmine());
})

gulp.task("default", gulp.series(["compile", "test"]));