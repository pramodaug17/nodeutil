var gulp = require("gulp");
var ts = require("gulp-typescript");
var gulpclean = require("gulp-clean")
var tsProject = ts.createProject("tsconfig.json");
var jestcli = require("jest-cli");

gulp.task("compile", function() {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("clean", () => {
    return gulp.src(["!dist/.dist", "dist/*"], { read: false })
        .pipe(gulpclean({ force: true }))
})

gulp.task("test", () => {
    return jestcli.run();
});

gulp.task("release", gulp.series([
    "clean",
    "compile",
    "test"
]));

gulp.task("default", gulp.series(["compile", "test"]));
