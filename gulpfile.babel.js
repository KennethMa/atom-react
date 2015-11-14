'use strict';

import gulp from 'gulp'
import gulpRsync from 'gulp-rsync'

gulp.task('deploy', () => {
    return gulp.src('./**/*')
        .pipe(gulpRsync({
            root: './',
            username: "root",
            progress: true,
            times: true,
            hostname: '159.203.246.137',
            destination: '/home/atom'
        }));
});