var show, slice$ = [].slice;
show = function(){
  var args;
  args = slice$.call(arguments);
  return console.log.apply(console, args);
};
window.onload = function(){
  var origin, offset;
  window.drag = document.querySelector('#can-drag');
  origin = {
    x: 0,
    y: 0
  };
  offset = {
    x: 0,
    y: 0
  };
  drag.onmousedown = function(event1){
    origin.x = drag.offsetLeft;
    origin.y = drag.offsetTop;
    offset.x = event1.clientX;
    offset.y = event1.clientY;
    show(origin, offset);
    document.onmousemove = function(event2){
      var diffX, diffY, resX, resY;
      diffX = event2.clientX - offset.x;
      diffY = event2.clientY - offset.y;
      resX = origin.x + diffX;
      resY = origin.y + diffY;
      show(resX, resY);
      drag.style.left = resX + "px";
      return drag.style.top = resY + "px";
    };
    return false;
  };
  document.onmouseup = function(){
    return document.onmousemove = null;
  };
};