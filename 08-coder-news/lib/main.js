// Generated by CoffeeScript 1.6.2
var dom, post_list;

post_list = require("./data");

console.log(post_list);

dom = require("./dom");

window.onload = function() {
  dom.render_list(post_list.by_sort);
  dom.bind_top(function() {
    return dom.render_list(post_list.by_sort);
  });
  dom.bind_new(function() {
    return dom.render_list(post_list.by_time);
  });
  return dom.bind_list(function(event) {
    var tag;

    tag = event.target;
    switch (tag.className) {
      case "title":
        return dom.render_post(tag);
      case "link":
        return dom.open_link(tag.innerText);
    }
  });
};
