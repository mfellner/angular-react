del         = require 'del'
path        = require 'path'
gulp        = require 'gulp'
react       = require 'gulp-react'
jade        = require 'gulp-jade'
browserSync = require 'browser-sync'

src =
  ng  : './public/angular/*.js'
  jsx : './public/react/*.jsx'
  jade: './public/*.jade'

dst =
  ng  : './build/angular/'
  jsx : './build/react/'
  jade: './build/'

gulp.task 'jsx', ->
  gulp.src src.jsx
  .pipe react()
  .pipe gulp.dest(dst.jsx)

gulp.task 'ng', ->
  gulp.src src.ng
  .pipe gulp.dest(dst.ng)

gulp.task 'jade', ->
  gulp.src src.jade
  .pipe jade
    pretty: true
    title : 'Angular React'
  .pipe gulp.dest(dst.jade)

gulp.task 'clean', ->
  del '.build/'

gulp.task 'build', ['clean', 'jsx', 'ng', 'jade']

gulp.task 'browserSync', ['build'], ->
  browserSync
    server:
      baseDir: "./build"

gulp.task 'watch', ['browserSync'], ->
  gulp.watch src.ng,   ['ng', browserSync.reload]
  gulp.watch src.jsx,  ['jsx', browserSync.reload]
  gulp.watch src.jade, ['jade', browserSync.reload]

gulp.task 'default', ['watch']
