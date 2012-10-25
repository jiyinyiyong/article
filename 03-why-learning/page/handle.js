var show, slice$ = [].slice;
show = function(){
  var args;
  args = slice$.call(arguments);
  console.log.apply(console, args);
};
window.onload = function(){
  var ps, i$, len$, p, bind, results$ = [];
  ps = document.querySelectorAll('p');
  for (i$ = 0, len$ = ps.length; i$ < len$; ++i$) {
    p = ps[i$];
    bind = fn$;
    results$.push(bind(p));
  }
  return results$;
  function fn$(elem){
    elem.onclick = function(){
      var last;
      last = document.querySelector('.clicked');
      if (last != null) {
        last.setAttribute('class', '');
      }
      show(elem.setAttribute('class', 'clicked'));
      elem.setAttribute('class', 'clicked');
    };
  }
};