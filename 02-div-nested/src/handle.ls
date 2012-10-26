
show = (...args) -> console.log.apply console, args

window.onload = !->

  window.drag = document.querySelector \#can-drag

  origin =
    x: 0
    y: 0

  offset =
    x: 0
    y: 0

  drag.onmousedown = (event1) ->
    origin.x = drag.offset-left
    origin.y = drag.offset-top

    offset.x = event1.client-x
    offset.y = event1.client-y

    show origin, offset

    document.onmousemove = (event2) ->
      diff-x = event2.client-x - offset.x
      diff-y = event2.client-y - offset.y

      res-x = origin.x + diff-x
      res-y = origin.y + diff-y

      show res-x, res-y

      drag.style.left = "#{res-x}px"
      drag.style.top = "#{res-y}px"

    off

  document.onmouseup = ->
    document.onmousemove = null