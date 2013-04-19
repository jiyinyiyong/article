
fs = require "fs"
path = require "path"

read = (filename) ->
  filepath = path.join "./posts", filename
  console.log filepath
  # fs.readFileSync filepath

data =
  0: require "./posts/about-coder-news"
  1: require "./posts/future-of-UI"
  2: require "./posts/why-collect-links"
  3: require "./posts/love-languages"
  4: require "./posts/join-communities"
  5: require "./posts/everyone-gets-old"
  6: require "./posts/you-and-me-different"
  6: require "./posts/about-this-site"

list = (value for _, value of data)

exports.by_time = list
exports.by_sort = list.sort (a, b) -> a.title < b.title

console.log list