var show, tau, slice$ = [].slice;
show = function(){
  var args;
  args = slice$.call(arguments);
  return console.log.apply(console, args);
};
tau = Math.PI * 2;
window.onload = function(){
  var canvas, pen, x$;
  canvas = document.querySelector('#logo');
  pen = canvas.getContext('2d');
  return (x$ = pen, x$.clearRect(0, 0, 960, 400), x$.fillStyle = 'hsl(240,70%,90%)', x$.fillRect(0, 0, 960, 400), x$.strokeStyle = 'white', x$.fillStyle = 'white', x$.lineWidth = 20, x$.beginPath(), x$.arc(200, 200, 140, tau * 0.1, 0.9 * tau, false), x$.moveTo(370, 200), x$.lineTo(370, 340), x$.fillRect(360, 160, 20, 20), x$.moveTo(440, 160), x$.lineTo(440, 340), x$.moveTo(440, 200), x$.arc(470, 200, 30, tau / 2, 0, false), x$.moveTo(540, 160), x$.lineTo(540, 340), x$.moveTo(540, 200), x$.arc(570, 200, 30, tau / 2, 0, false), x$.moveTo(640, 160), x$.lineTo(640, 310), x$.arc(670, 310, 30, tau / 2, 0, true), x$.lineTo(700, 160), x$.moveTo(700, 310), x$.arc(730, 310, 30, tau / 2, tau / 4, true), x$.stroke());
};