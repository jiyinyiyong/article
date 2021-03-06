
define (require, exports) ->

  fn = require './functions'

  choice = []

  choice[8] = fn.backspace
  choice[9] = fn.insert_blank
  choice[13] = fn.create_block

  choice[32] = fn.spacebar
  choice[33] = fn.page_up
  choice[34] = fn.page_down
  choice[35] = fn.move_end
  choice[36] = fn.move_home

  choice[37] = fn.move_left
  choice[39] = fn.move_right
  choice[38] = fn.move_up
  choice[40] = fn.move_down

  # choice[45] = fn.key_insert
  choice[46] = fn.key_delete

  exports.choice = choice

  return