
define (require, exports) ->
  window.show = (args...) ->
    console.log.apply console, args
  window.error = (info) ->
    throw new Error info

  run = require '../src/run'
  cirru = require '../../cirru-editor/src/cirru-editor.js'
  draw = require './draw'

  editor = cirru.editor 'writer'

  run_code = ->
    code = editor.value
    show (JSON.stringify editor.val())
    debug = document.querySelector('#debug')
    debug.innerHTML = ''
    # try
    #   ret = run.run {}, code
    #   debug.innerHTML = draw.output ret
    # catch err
    #   debug.innerHTML = err
    ret = run.run {}, code
    debug.innerHTML = draw.output ret

  debug.onclick = run_code
  
  return