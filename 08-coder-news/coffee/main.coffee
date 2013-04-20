
post_list = require "./data"
console.log post_list

dom = require "./dom"

window.onload = ->
  dom.render_list post_list.by_sort
  dom.bind_top ->
    console.log "top", post_list.by_sort
    dom.render_list post_list.by_sort
  dom.bind_new ->
    console.log "new", post_list.by_time
    dom.render_list post_list.by_time
  dom.bind_back -> dom.hide_post()

  dom.bind_list (event) ->
    tag = event.target
    switch tag.className
      when "title" then dom.render_post tag
      when "link" then dom.open_link tag.innerText
      # when "item" then dom.render_post tag.q(".title")
      # when "post" then dom.render_post tag.q(".title")

  dom.hide_post()
  # dom.test()