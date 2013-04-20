// Generated by CoffeeScript 1.6.2
var auther, css, html, q, render_title, _ref;

_ref = require("lilyturf"), html = _ref.html, css = _ref.css;

q = function(query) {
  return document.querySelector(query);
};

Element.prototype.q = function(query) {
  return this.querySelector(query);
};

auther = {
  name: "jiyinyiyong",
  avatar: "http://photos.tuchong.com/108934/f/2159629.jpg"
};

render_title = function(post) {
  return html(function() {
    return this.div({
      "class": "post"
    }, this.img({
      "class": "avatar",
      src: auther.avatar,
      title: auther.name
    }), this.div({
      "class": "item"
    }, this.div({
      "class": "title",
      data: post.content
    }, post.title), this.span({
      "class": "link"
    }, post.link != null ? post.link : "self")));
  });
};

exports.render_list = function(post_list) {
  var list;

  list = q("#list");
  return list.innerHTML = html(function() {
    return this.div({
      "class": "container"
    }, post_list.map(render_title).join(""));
  });
};

exports.bind_list = function(callback) {
  var list;

  list = q("#list");
  return list.onclick = callback;
};

exports.render_post = function(tag) {
  q("#title").innerText = tag.innerText;
  q("#content").innerText = tag.content || "";
  if (tag.link) {
    q(".link").innerText = tag.link;
    return q(".link").href = "http://" + tag.link;
  }
};

exports.open_link = function(link) {
  if (link.match(/\w\.\w/)) {
    return window.open(link);
  }
};

exports.bind_top = function(callback) {
  return q(".menu .top").onclick = callback;
};

exports.bind_new = function(callback) {
  return q(".menu .new").onclick = callback;
};
