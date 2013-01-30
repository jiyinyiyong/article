
log = -> console?.log? arguments...
delay = (f, t) -> setTimeout t, f
q = (query) -> document.querySelector query
Node.prototype.q = (query) -> @querySelector query
Object.getOwnPropertyNames(Array.prototype).forEach (prop) ->
  if Array.prototype[prop]?
    if (typeof Array.prototype[prop]) is "function"
      NodeList.prototype[prop] = Array.prototype[prop]

window.onload = ->