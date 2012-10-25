
show = !(...args) -> console.log.apply console, args

window.onload = ->

  ps = document.querySelectorAll \p
  # ps.forEach !(p) ->
  for p in ps

    bind = !(elem) ->
      elem.onclick = !->
        last = document.querySelector \.clicked
        if last?
          last.setAttribute \class, ''
        show elem.setAttribute \class, \clicked
        elem.setAttribute \class , \clicked

    bind p