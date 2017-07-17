'use strict';

const gulp = require('gulp');
const gulpMocha = require('gulp-mocha');

gulp.task('test', () => {
    return gulp.src('test/*.test.js')
        .pipe(gulpMocha({
            compilers: 'js:babel-register'
        }));
});

gulp.task('dev', () => {
    gulp.watch(['src/**', 'test/**'], ['test']);
});