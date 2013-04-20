
post_list = require "./data"
console.log post_list

dom = require "./dom"

window.onload = ->
  dom.render_list post_list.by_sort
  dom.bind_top -> dom.render_list post_list.by_sort
  dom.bind_new -> dom.render_list post_list.by_time
  dom.bind_list (event) ->
    tag = event.target
    switch tag.className
      when "title" then dom.render_post tag
      when "link" then dom.open_link tag.innerText
      # when "item" then dom.render_post tag.q(".title")
      # when "post" then dom.render_post tag.q(".title")