
define !(require, exports) ->
  cirru = require \../../../cirru-editor/src/cirru-editor
  run = require \../../../cirru-eval/src/run
  draw = require \../../../cirru-eval/examples/draw
  exp = require \./exp.js
  show = (...args) -> console.log.apply console, args

  query = -> document.querySelector it

  all = document.querySelectorAll \.pair
  [0 til all.length].forEach (n) ->
    editor = cirru.editor "editor-#n"
    result = query "\#result-#n"
    editor.val exp.list[n]
    result.onclick = ->
      try
        show JSON.stringify editor.val()
        res = run.run {}, editor.value
        result.innerHTML = draw.output res
      catch err
        result.innerHTML = err

    result.click!