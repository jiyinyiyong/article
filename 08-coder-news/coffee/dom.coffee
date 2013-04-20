
{html, css} = require "lilyturf"

q = (query) -> document.querySelector query
Element::q = (query) -> @querySelector query

auther =
  name: "jiyinyiyong"
  avatar: "http://photos.tuchong.com/108934/f/2159629.jpg"

render_title = (post) ->
  html ->
    @div class: "post",
      @img class: "avatar", src: auther.avatar, title: auther.name
      @div class: "item",
        @div class: "title", data: post.content, post.title
        @span class: "link",
          if post.link? then post.link else "self"

exports.render_list = (post_list) ->
  list = q "#list"
  list.innerHTML = html ->
    @div class: "container",
      post_list.map(render_title).join ""

exports.bind_list = (callback) ->
  list = q "#list"
  list.onclick = callback

exports.render_post = (tag) ->
  q("#title").innerText = tag.innerText
  q("#content").innerText = tag.content or ""
  if tag.link
    q(".link").innerText = tag.link
    q(".link").href = "http://#{tag.link}"

exports.open_link = (link) ->
  if link.match /\w\.\w/
    window.open link

exports.bind_top = (callback) ->
  q(".menu .top").onclick = callback

exports.bind_new = (callback) ->
  q(".menu .new").onclick = callback