
{html, css} = require "lilyturf"

exports.render_list = (post_list) ->
  post_list.forEach (post) ->
    console.log post