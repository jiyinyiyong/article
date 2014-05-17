#!/usr/bin/env coffee
project = 'repo/10-her-OS-1'

require 'shelljs/make'
path = require 'path'
mission = require 'mission'

mission.time()

cirru = ->
  mission.cirru
    file: 'index.cirru', from: 'cirru/', to: './', extname: '.html'
target.cirru = -> cirru()

target.compile = ->
  cirru()

target.watch = ->
  station = mission.reload()

  mission.watch
    files: ['cirru/']
    trigger: (filepath, extname) ->
      switch extname
        when '.cirru'
          cirru()
          station.reload project

target.rsync = ->
  mission.rsync
    file: './'
    dest: 'tiye:~/repo/article/10-her-OS-1/'
    options:
      exclude: [
        'node_modules/'
        'coffee'
        'README.md'
        'js'
      ]