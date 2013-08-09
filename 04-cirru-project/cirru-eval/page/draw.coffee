
define (require, exports) ->
  show = ->

  exports.output = (scope) ->
    show 'scope', scope
    json = JSON.stringify scope
    json += '<br><br>'
    scope[' stdout'].forEach (list) ->
      ret = JSON.stringify return: list
      json += '-> '
      json += ret[10...-1]
      json += '<br>'
    json

  return