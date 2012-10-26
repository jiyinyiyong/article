
show = (...args) -> console.log.apply console, args
tau = Math.PI * 2
window.onload = ->

  canvas = document.querySelector \#logo
  pen = canvas.getContext \2d
  pen
    ..clear-rect 0, 0, 960, 400
    ..fill-style = 'hsl(240,70%,90%)'
    ..fill-rect 0, 0, 960, 400

    ..stroke-style = \white
    ..fillStyle = \white
    ..line-width = 20
    ..begin-path!
  
    ..arc 200, 200, 140, tau*0.1, 0.9*tau, no

    ..move-to 370, 200
    ..line-to 370, 340
    ..fill-rect 360, 160, 20, 20

    ..move-to 440, 160
    ..line-to 440, 340
    ..move-to 440, 200
    ..arc 470, 200, 30, tau/2, 0, no

    ..move-to 540, 160
    ..line-to 540, 340
    ..move-to 540, 200
    ..arc 570, 200, 30, tau/2, 0, no

    ..move-to 640, 160
    ..line-to 640, 310
    ..arc 670, 310, 30, tau/2, 0, yes
    ..line-to 700, 160
    ..move-to 700, 310
    ..arc 730, 310, 30, tau/2, tau/4, yes

    ..stroke!