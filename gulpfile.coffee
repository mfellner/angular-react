del         = require 'del'
path        = require 'path'
gulp        = require 'gulp'
jade        = require 'gulp-jade'
webpack     = require 'gulp-webpack'
browserSync = require 'browser-sync'

src =
  main: './public/angular/app.js'
  ng  : './public/angular/*.js'
  jsx : './public/react/*.jsx'
  jade: './public/*.jade'

dst =
  pack: './build/app.min.js'
  jade: './build/'

cdn =
  styles: [
    '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css'
    '//cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/material.min.css'
  ]
  scripts: [
    '//ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.6/angular.js'
    '//cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react.js'
  ]

gulp.task 'webpack', ->
  gulp.src src.main
  .pipe webpack
    output:
      filename: path.basename dst.pack
    externals:
      'react'  : 'React'
      'angular': 'angular'
    module:
      loaders: [
        {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
      ]
  .pipe gulp.dest(path.dirname dst.pack)

gulp.task 'jade', ->
  gulp.src src.jade
  .pipe jade
    pretty: yes
    locals:
      title  : 'Angular React'
      styles : cdn.styles
      scripts: cdn.scripts.concat(path.basename dst.pack)
  .pipe gulp.dest(dst.jade)

gulp.task 'clean', ->
  del './build/'

gulp.task 'build', ['webpack', 'jade']

gulp.task 'browserSync', ['build'], ->
  browserSync
    server:
      baseDir: "./build"

gulp.task 'watch', ['browserSync'], ->
  gulp.watch src.ng,   ['webpack', browserSync.reload]
  gulp.watch src.jsx,  ['webpack', browserSync.reload]
  gulp.watch src.jade, ['jade',    browserSync.reload]

gulp.task 'default', ['watch']
