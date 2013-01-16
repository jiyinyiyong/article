
## 大家来用 GFM 吧!

#### Markdown 是什么

关于这一点, [Wiki][wiki] 上最为明确了, 直接就上用法
中文的好的教程还有 [WOW Ubuntu][wow] 的大侠搞的教程, 非常详细, 猜是[翻译][tw]
也许看下[阳志平的个人网站][ypz] 上的说明能更好懂一点
教程还有[更多][more1]更多[more2]的版本

Markdown 项目主页在 [Daring Fireball][df] 的[网站上有具体的说明][official]
去世的 Aaron Swartz 曾经参与 Markdown 最初的制订过程
互联网上那么多事情总是会关联在一起, 令人感慨
我到现在也弄不清 Markdown 历史究竟怎样, 似乎二十年前就有了

去年一篇题名 [The Future of Markdown][future] 讲述了 Markdown 的现状
一门缺乏标准的语言, 在 Github, StackOverflow 都有各自的特性
国内的论坛应该借鉴自 Github, 我是说 [CNode][cnode], [Ruby-China][ruby], [Python-China][python]

[future]: http://www.codinghorror.com/blog/2012/10/the-future-of-markdown.html
[ypz]: http://www.yangzhiping.com/tech/r-markdown-knitr.html
[wiki]: http://zh.wikipedia.org/zh/Markdown
[wow]: http://wowubuntu.com/markdown/
[tw]: http://markdown.tw/
[official]: http://daringfireball.net/projects/markdown/
[df]: http://en.wikipedia.org/wiki/Daring_Fireball
[cnode]: http://cnodejs.org/
[ruby]: http://ruby-china.org/topics
[python]: http://python-china.org/
[more1]: http://www.stack.nl/~dimitri/doxygen/manual/markdown.html
[more2]: http://www.showdown.im/

#### 个人经历

我第一次认识 Markdown 是在 Gurudigger 上因为改版我开始不能换行了
因为上多了知乎, 体会到文本格式化特重要, 当时换行排格式已经是我的习惯
刚开始以为 Bug, 后来人提醒我说那是 Markdown, 语法需要空行来换行..
记得 HN 用的也是类似的工具, 但从一开始这样的手法就让我深恶痛绝

后来逛 Github 多了, 慢慢熟悉了 Github 自己的 Markdown 方言 [GFM][github]
因为 GFM 对代码和 Issue 做了些优化, 至少使用更加友好了
没有过分的代码换行, `` ``` `` 作为代码块的标记也比另外的标准好
目前 Markdown 有多个实现, 这个问题我当初非常纠结地问过,
而我现在一直采用 [Marked][marked] 这个支持 GFM 的版本来码东西
换行的问题也在很多天前终于搞定了, 现在算是比较流畅的

网上用的标记, 主要是链接, 代码, 其他在一般帖子里不太需要
至少, 这两样功能必须优化到极致的, 在编辑方面必须要足够轻松
而 Markdown 的好处, 也在于直接作为纯文本编辑, 不用多么复杂

[github]: http://github.github.com/github-flavored-markdown/
[ask]: http://ruby-china.org/topics/3322
[marked]: https://github.com/chjj/marked

#### GFM 的语法

CNode 一直都有很多 Markdown 失败的帖子, 感觉永远赶不上 Ruby 中文
我之后去搜索, 没有发现 GFM 好一些的介绍, 想想要不自己写一份吧

* 链接

首先链接在 GFM 里是自动标记的, 而原始的版本要加 `<>`:

http://daringfireball.net/
<http://daringfireball.net/>

```
http://daringfireball.net/
<http://daringfireball.net/>
```

也可以直接嵌在文字当中, 比如标记一个 [MaDe 编辑器](http://lyric.im/ma-de-markdown-wysiwyg-editor/)

```
也可以直接嵌在文字当中, 比如标记一个 [MaDe 编辑器](http://lyric.im/ma-de-markdown-wysiwyg-editor/)
```

或者[另一个名叫 marked 的 iOS 应用][app]我没装过的 - -!
[app]: http://markedapp.com/

```
或者[另一个名叫 marked 的 iOS 应用][app]我没装过的 - -!
[app]: http://markedapp.com/
```

* 代码

代码有句中的代码, 代码块, 都是用的 `` ` `` 作为符号标记的
句中用 `1` 个或者 `2` 个, 而代码块用 `3` 个单独作为行的反引号
两个引号可以用在需要转译的地方, 比如输入 `` ``` `` 的时候
但大概 Github 和 Marked 对于行内的多个 `` `  `` 依然处理不同的吧
```
代码有句中的代码, 代码块, 都是用的 `` ` `` 作为符号标记的
句中用 `1` 个或者 `2` 个, 而代码块用 `3` 个单独作为行的反引号
两个引号可以用在需要转译的地方, 比如输入 `` ``` `` 的时候
但大概 Github 和 Marked 对于行内的多个 `` ` `` 依然处理不同的吧
```

另外 Github 上在代码块第一行反引号之后可以声明语法
比如 CoffeeScript 下面这样就会被在 HTML 标记上一些属性
Github 站点上会直接对代码形成语法高亮, 其他很多模块也借鉴了
<pre>
```coffee
f = (name) -> "hello #{name}"
f 'Markdown'
```
</pre>

比如 [marked][hl] 就可以配合 [Highlight.js][hljs] 在编译时高亮

[hl]: https://github.com/chjj/marked#usage
[hljs]: http://softwaremaniacs.org/soft/highlight/en/

* 图片

图片的标记和链接基本一致, 文本部分在链接不可用时显示为文字

![Mark-Up](http://d2o0t5hpnwv4c1.cloudfront.net/2063_markdown/preview.png)

![Mark-Down][cat-girl]
[cat-girl]: http://octodex.github.com/images/aidorucat.png

[![Mark-Down][cat-boy]][octocat]
[cat-boy]: http://octodex.github.com/images/codercat.jpg
[octocat]: http://octodex.github.com/codercat

```
![Mark-Up](http://d2o0t5hpnwv4c1.cloudfront.net/2063_markdown/preview.png)

![Mark-Down][cat-girl]
[cat-girl]: http://octodex.github.com/images/aidorucat.png

[![Mark-Down][cat-boy]][octocat]
[cat-boy]: http://octodex.github.com/images/codercat.jpg
[octocat]: http://octodex.github.com/codercat
```

带链接的图片比较搞, 其实还不如直接在里边写 HTML,
但说回来, 允许 HTML 实在是危险的, 于是大家都是过滤的

* 其他的

另外还有引用, **加粗**, *斜体*, 列表之类的功能

> Aaron Swartz deserves a tremendous amount of credit for his feedback on the design of Markdown’s formatting syntax. Markdown is much better thanks to Aaron’s ideas, feedback, and testing. Also, Aaron’s html2text is a very handy (and free) utility for turning HTML into Markdown-formatted plain text.

更多的细节, 看文档比看我介绍一遍要轻松多了, 推荐看
我在看到 CNode 站点上好多无法正常格式化的代码, 看得好辛酸

#### 更多人用 GFM 吧

Github 官方的 README 文件没有 `.gfm` 格式标记, 个人非常困惑
中文方块字容易堆砌成砖头, 我理解中不换行看起来非常累
而英文也类似, 但, 毕竟大多数人的书写习惯阅读习惯我是拗不过了
从代码当中我学会了可读性多么重要, 我很希望这能回去影响写作

作为 Coder, 对编辑器字体和高亮各种挑剔, 我想大多数人都是有体会的
没有高亮, 没有等宽字体, 甚至手写的代码, 那都是多不自在的
Markdown 无疑是对于网页一个更好的解决方式
除非有一天, 我们直接在网页上嵌入代码编辑器专门处理代码
或者有发明出强大的代码图片和链接可视化编辑工具, 那另当别论

最后链上一份各种标记语言的对比, 至少看下喜欢哪个 ;p
http://www.worldhello.net/gotgithub/appendix/markups.html