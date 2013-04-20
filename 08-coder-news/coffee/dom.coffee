
{html, css} = require "lilyturf"

q = (query) -> document.querySelector query
Element::q = (query) -> @querySelector query

auther =
  name: "jiyinyiyong"
  avatar: "http://photos.tuchong.com/108934/f/2159629.jpg"

escape_link = (string = "") ->
  string.replace(/>/g, "&gt;")
  .replace(/</g, "&lt;")
  .replace(/(http(s)?\:\/\/\S+)/g, "<a href=\"$1\" target=\"_blank\">$1</a>")
  .replace(/\n/g, "<br>")

render_title = (post) ->
  text = escape_link post.content
  html ->
    @div {"class": "post"},
      @img {"class": "avatar", src: auther.avatar, title: auther.name}
      @div class: "item",
        @div class: "title", content: text, image: post.image,
          post.title
        @span class: "link",
          if post.link? then post.link else "@"

show_post = ->
  post = q "#post"
  post.style.visibility = "visible"
  post.style.height = "100%"
  post.style.opacity = "1"

delay = (t, f) -> setTimeout f, t

hide_post = ->
  post.q "#post"
  delay 400, ->
    post.style.height = "0%"
    post.style.visibility = "hidden"
  post.style.opacity = "0"

exports.render_list = (post_list) ->
  list = q "#list"
  list.innerHTML = html ->
    @div class: "container",
      post_list.map(render_title).join ""

exports.bind_list = (callback) ->
  list = q "#list"
  list.onclick = callback

exports.render_post = (tag) ->
  show_post()
  q("#title").innerText = tag.innerText
  q("#content").innerHTML = tag.getAttribute("content") or ""
  image = tag.getAttribute("image")
  q("#post").style.backgroundImage = "url(#{image})"
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

exports.bind_back = (callback) ->
  q("#back").onclick = callback

exports.hide_post = ->
  hide_post()

exports.test = ->
  delay 0, ->
    q("#list .post .title").click()