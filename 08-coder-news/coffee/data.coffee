
fs = require "fs"
path = require "path"

article_list = [
  "./posts/about-coder-news"
  "./posts/future-of-UI"
  "./posts/why-collect-links"
  "./posts/love-languages"
  "./posts/join-communities"
  "./posts/everyone-gets-old"
  "./posts/you-and-me-different"
"./posts/about-this-site"
]

a = "./posts/about-coder-news"
require a

data =
  0: require "./posts/about-coder-news"
  1: require "./posts/future-of-UI"
  2: require "./posts/why-collect-links"
  3: require "./posts/love-languages"
  4: require "./posts/join-communities"
  5: require "./posts/everyone-gets-old"
  6: require "./posts/you-and-me-different"
  7: require "./posts/about-this-site"
  8:
    title: "提议: 我们变通下 HN 的方式, 在 Github 上创建一个技术论坛"
    link: "http://v2ex.com/t/65472"
    image: "http://designbycoffee.com/wp-content/uploads/2012/04/hn.jpg"

list = (value for _, value of data)

exports.by_time = list
exports.by_sort = list.concat().sort (a, b) ->
  if a.title > b.title then 1 else -1

console.log list