(function () {

    'use strict';

    const connect = require('gulp-connect'),
          concat  = require('gulp-concat'),
          eslint  = require('gulp-eslint'),
          uglify  = require('gulp-uglify'),
          gulp    = require('gulp'),
          fs      = require('fs');

    //----- Building JS -----//

    gulp.task('eslint', function () {
        return gulp.src('_js/bookmarklet.js')
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    gulp.task('js', [ 'eslint' ], function () {
        return gulp.src([ '_js/vendor/sweetalert.min.js', '_js/bookmarklet.js' ])
            .pipe(concat('goto-online.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(''));

    });

    //----- Watch -----//

    gulp.task('connect', function () {
        connect.server({
            root      : '',
            https     : {
                key : fs.readFileSync('_cert/localhost.key'),
                cert: fs.readFileSync('_cert/localhost.crt')
            },
            livereload: false
        });
    });

    gulp.task('watch', [ 'js', 'connect' ], function () {
        gulp.watch('_js/**/*.js', [ 'js' ]);
    });

    gulp.task('default', [ 'js' ]);

}());


