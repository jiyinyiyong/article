
data =
  0: require "./posts/about-coder-news"
  1: require "./posts/future-of-UI"
  2: require "./posts/why-collect-links"
  3: require "./posts/love-languages"
  4: require "./posts/join-communities"
  5: require "./posts/everyone-gets-old"
  6: require "./posts/smarter-people"
  7: require "./posts/about-this-site"
  8:
    title: "提议: 我们变通下 HN 的方式, 在 Github 上创建一个技术论坛"
    link: "http://v2ex.com/t/65472"
    image: "http://designbycoffee.com/wp-content/uploads/2012/04/hn.jpg"
  9:
    title: "Startup News"
    link: "http://news.dbanotes.net/"
    image: "http://python-assets.b0.upaiyun.com/june/img/main_bg.gif"
  10:
    title: "题叶"
    link: "http://weibo.com/jiyinyiyong"
    image: "http://photos.tuchong.com/108934/f/2159629.jpg"

list = (value for _, value of data)

exports.by_time = list
exports.by_sort = list.concat().sort (a, b) ->
  if a.title > b.title then 1 else -1

console.log list