"""
YouTube Clone
=============

.. toctree::
   :maxdepth: 2
   :caption: 目录:

   intro
   installation
   usage
   api
   faq

介绍
----

YouTube Clone是一个模仿YouTube首页的网页，提供了推荐视频、搜索功能、不同的视频分类以及侧边栏的订阅和播放列表。此外，还支持切换到暗黑模式，以便在低光照条件下舒适地浏览。

安装
----

首先，需要安装Python 3.9和以下的第三方包：

- Flask==1.1.2
- bcrypt==3.2.0
- Sphinx==4.0.2

然后，下载并解压源代码，进入项目目录，运行以下命令启动应用：

.. code-block:: bash

   python main.py

使用
----

打开浏览器，访问http://localhost:5000，就可以看到YouTube Clone的首页。

API
---

YouTube Clone提供了以下API：

- GET /videos：获取所有视频
- POST /users：创建新用户
- POST /users/{username}/subscriptions：订阅视频
- POST /users/{username}/playlists：将视频添加到播放列表

常见问题
--------

1. 如何切换到暗黑模式？

   在页面右上角，点击“暗黑模式”按钮，就可以切换到暗黑模式。再次点击，可以切换回正常模式。

2. 如何搜索视频？

   在页面顶部的搜索框中输入关键词，然后点击“搜索”按钮，就可以搜索到相关的视频。

3. 如何订阅视频？

   在视频下方，点击“订阅”按钮，就可以订阅该视频。订阅的视频会出现在侧边栏的“我的订阅”中。

4. 如何将视频添加到播放列表？

   在视频下方，点击“添加到播放列表”按钮，就可以将该视频添加到播放列表。播放列表中的视频会出现在侧边栏的“我的播放列表”中。

"""
