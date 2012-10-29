
define !(require, exports) ->
  show = (...args) -> console.log.apply console, args
  tau = Math.PI * 2

  canvas = document.querySelector \#logo
  pen = canvas.getContext \2d
  pen
    ..clear-rect 0, 0, 960, 400
    ..fill-style = 'hsl(240,70%,88%)'
    ..fill-rect 0, 0, 960, 400

    ..stroke-style = \white
    ..fillStyle = \white
    ..line-width = 20
    ..begin-path!
  
    ..arc 260, 200, 140, tau*0.1, 0.9*tau, no

    ..move-to 430, 160
    ..line-to 430, 340
    ..fill-rect 420, 120, 20, 20

    ..move-to 500, 160
    ..line-to 500, 340
    ..move-to 500, 200
    ..arc 530, 200, 30, tau/2, 0, no

    ..move-to 600, 160
    ..line-to 600, 340
    ..move-to 600, 200
    ..arc 630, 200, 30, tau/2, 0, no

    ..move-to 700, 160
    ..line-to 700, 310
    ..arc 730, 310, 30, tau/2, 0, yes
    ..line-to 760, 160
    ..move-to 760, 310
    ..arc 790, 310, 30, tau/2, tau/4, yes

    ..stroke!