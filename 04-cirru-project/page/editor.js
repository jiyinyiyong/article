var slice$ = [].slice;
define(function(require, exports){
  var cirru, run, draw, exp, show, query, all;
  cirru = require('../../../cirru/cirru-editor/src/cirru-editor');
  run = require('../../../cirru/cirru-eval/src/run');
  draw = require('../../../cirru/cirru-eval/examples/draw');
  exp = require('./exp.js');
  show = function(){
    var args;
    args = slice$.call(arguments);
    return console.log.apply(console, args);
  };
  query = function(it){
    return document.querySelector(it);
  };
  all = document.querySelectorAll('.pair');
  (function(){
    var i$, to$, results$ = [];
    for (i$ = 0, to$ = all.length; i$ < to$; ++i$) {
      results$.push(i$);
    }
    return results$;
  }()).forEach(function(n){
    var editor, result;
    editor = cirru.editor("editor-" + n);
    result = query("#result-" + n);
    editor.val(exp.list[n]);
    result.onclick = function(){
      var res, err;
      try {
        show(JSON.stringify(editor.val()));
        res = run.run({}, editor.value);
        return result.innerHTML = draw.output(res);
      } catch (e$) {
        err = e$;
        return result.innerHTML = err;
      }
    };
    return result.click();
  });
});