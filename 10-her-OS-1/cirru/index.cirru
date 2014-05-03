
doctype
html
  head
    title "UI design of Her OS 1"
    meta $ :charset utf-8
    link (:rel icon)
      :type image/png
      :href http://tiye.qiniudn.com/her-icon.jpg
    link (:rel stylesheet) $ :href css/style.css
  body
    .title
      .line "电影 Her 中的界面设计截图"
    .about
      .line "看电影 Her 的时候, 我注意到其中的计算机界面非常漂亮"
      .line "于是截了很多图片出来整理到一起, 方便参考借鉴"
    .content
      @partial ./images.cirru
    @insert ./ga.html