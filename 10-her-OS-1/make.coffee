#!/usr/bin/env coffee

project = 'repo/article/10-her-OS-1'
interval = interval: 300
watch = no

require 'shelljs/make'
fs = require 'fs'
path = require 'path'
station = require 'devtools-reloader-station'

{render, setResolver} = require 'cirru-html'
setResolver (basePath, child, scope) ->
  dest = path.join (path.dirname basePath), child
  scope?['@filename'] = dest
  cat dest

startTime = (new Date).getTime()
process.on 'exit', ->
  now = (new Date).getTime()
  duration = (now - startTime) / 1000
  console.log "\nfinished in #{duration}s"

reload = -> station.reload project if watch


target.folder = ->
  mkdir '-p', 'cirru', 'css'
  exec 'touch cirru/index.cirru css/style.css'
  exec 'touch README.md .gitignore .npmignore'

target.cirru = ->
  file = 'cirru/index.cirru'
  html = render (cat file), '@filename': file
  html.to 'index.html'
  console.log 'done: cirru'
  do reload

target.compile = ->
  target.cirru()

target.watch = ->
  watch = yes
  fs.watch 'cirru/', interval, target.cirru

  station.start()