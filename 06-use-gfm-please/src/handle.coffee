
log = -> console?.log? arguments...
delay = (f, t) -> setTimeout t, f
q = (query) -> document.querySelector query
Node.prototype.q = (query) -> @querySelector query
Object.getOwnPropertyNames(Array.prototype).forEach (prop) ->
  if Array.prototype[prop]?
    if (typeof Array.prototype[prop]) is "function"
      NodeList.prototype[prop] = Array.prototype[prop]

mousein = no

window.onload = ->
  text = q '#text'
  view = q '#view'
  hide = q '#hide'

  marked.setOptions
    gfm: yes
    breaks: yes
    sanitize: no

  render = ->
    opacity = document.defaultView.getComputedStyle(text).opacity
    # log opacity
    content = text.value
    localStorage.article = content
    unless (Number opacity) is 1
      start = text.selectionStart or 0
      end = text.selectionEnd or 0
      tag =
        if start is end then 'span' else 'div'
      content = content[0...start] + "<#{tag} id='caret'>" +
        content[start...end] + "</#{tag}>" + content[end..]
      view.innerHTML = marked content
      q('#caret').scrollIntoViewIfNeeded()

  text.addEventListener 'keyup', render

  log localStorage
  if localStorage.article? and (localStorage.article.length > 0)
    text.value = localStorage.article
    render()
  else
    req = new XMLHttpRequest
    req.open 'get', '../src/content.md'
    req.onload = (res) ->
      text.value = res.target.response
      render()
    req.send()

  hide.onclick = ->
    if text.style.display is 'none'
      text.style.display = 'block'
      hide.innerText = 'Close Editor'
      text.focus()
      render()
    else
      text.style.display = 'none'
      hide.innerText = 'Wake it'

  text.onmouseout = render