// Generated by CoffeeScript 1.4.0
var delay, log, mousein, q;

log = function() {
  return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log.apply(console, arguments) : void 0 : void 0;
};

delay = function(f, t) {
  return setTimeout(t, f);
};

q = function(query) {
  return document.querySelector(query);
};

Node.prototype.q = function(query) {
  return this.querySelector(query);
};

Object.getOwnPropertyNames(Array.prototype).forEach(function(prop) {
  if (Array.prototype[prop] != null) {
    if ((typeof Array.prototype[prop]) === "function") {
      return NodeList.prototype[prop] = Array.prototype[prop];
    }
  }
});

mousein = false;

window.onload = function() {
  var hide, render, req, text, view;
  text = q('#text');
  view = q('#view');
  hide = q('#hide');
  marked.setOptions({
    gfm: true,
    breaks: true
  });
  render = function() {
    var content, end, opacity, start, tag;
    opacity = document.defaultView.getComputedStyle(text).opacity;
    content = text.value;
    localStorage.article = content;
    if ((Number(opacity)) !== 1) {
      start = text.selectionStart || 0;
      end = text.selectionEnd || 0;
      tag = start === end ? 'span' : 'div';
      content = content.slice(0, start) + ("<" + tag + " id='caret'>") + content.slice(start, end) + ("</" + tag + ">") + content.slice(end);
      view.innerHTML = marked(content);
      return q('#caret').scrollIntoViewIfNeeded();
    }
  };
  text.addEventListener('keyup', render);
  log(localStorage);
  if ((localStorage.article != null) && (localStorage.article.length > 0)) {
    text.value = localStorage.article;
    render();
  } else {
    req = new XMLHttpRequest;
    req.open('get', '../src/content.md');
    req.onload = function(res) {
      text.value = res.target.response;
      return render();
    };
    req.send();
  }
  hide.onclick = function() {
    if (text.style.display === 'none') {
      text.style.display = 'block';
      hide.innerText = 'Close Editor';
      text.focus();
      return render();
    } else {
      text.style.display = 'none';
      return hide.innerText = 'Wake it';
    }
  };
  return text.onmouseout = render;
};
