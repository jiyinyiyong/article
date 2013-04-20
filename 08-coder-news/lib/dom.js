// Generated by CoffeeScript 1.6.2
var auther, css, delay, hide_post, html, q, render_title, show_post, _ref;

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
      data: post.content,
      image: post.image
    }, post.title), this.span({
      "class": "link"
    }, post.link != null ? post.link : "@")));
  });
};

show_post = function() {
  var post;

  post = q("#post");
  post.style.height = "100%";
  return post.style.opacity = "1";
};

delay = function(t, f) {
  return setTimeout(f, t);
};

hide_post = function() {
  post.q("#post");
  delay(400, function() {
    return post.style.height = "0%";
  });
  return post.style.opacity = "0";
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
  var image;

  show_post();
  q("#title").innerText = tag.innerText;
  q("#content").innerText = tag.getAttribute("content") || "";
  image = tag.getAttribute("image");
  q("#post").style.backgroundImage = "url(" + image + ")";
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

exports.bind_back = function(callback) {
  return q("#back").onclick = callback;
};

exports.hide_post = function() {
  return hide_post();
};

exports.test = function() {
  return delay(0, function() {
    return q("#list .post .title").click();
  });
};
