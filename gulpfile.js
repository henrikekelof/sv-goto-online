(function () {

    'use strict';

    const connect = require('gulp-connect'),
          eslint  = require('gulp-eslint'),
          uglify  = require('gulp-uglify'),
          path    = require('path'),
          gulp    = require('gulp'),

          dir     = {
              dist: '',
              js  : '_js'
          };

    //----- Building JS -----//

    gulp.task('eslint', function () {
        return gulp.src(path.join(dir.js, '/**/*.js'))
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    gulp.task('js', [ 'eslint' ], function () {
        return gulp.src(path.join(dir.js, '/**/*.js'))
            .pipe(uglify())
            .pipe(gulp.dest(dir.dist));

    });

    //----- Watch -----//

    gulp.task('connect', function () {
        connect.server({
            root      : dir.dist,
            livereload: false
        });
    });

    gulp.task('watch', [ 'js', 'connect' ], function () {
        gulp.watch(path.join(dir.js, '/**/*.js'), [ 'js' ]);
    });

    gulp.task('default', [ 'js' ]);

}());


