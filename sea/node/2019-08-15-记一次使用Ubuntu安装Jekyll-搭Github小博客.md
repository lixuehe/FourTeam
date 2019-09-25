---
layout: post
title:  "记一次使用Ubuntu安装Jekyll 搭建Github小博客"
date:   2019-08-15 13:52:26 +0800
tags:
      - 学习
---

### Jekyll是什么？

>引用自官网：
Jekyll 是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过一个转换器（如 Markdown）和我们的 Liquid 渲染器转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。Jekyll 也可以运行在 GitHub Page 上，也就是说，你可以使用 GitHub 的服务来搭建你的项目页面、博客或者网站，而且是完全免费的。

话不多说了，直接开始安装吧。  

### 安装Jekyll
我这里使用的Ubuntu 18.04安装环境
1. 安装 Ruby RubyGems NodeJS 和 Python  
	打开终端输入命令。
    ```
    sudo apt-get install ruby
    sudo apt-get install rubygems-integration
    sudo apt-get install ruby-bundler
    sudo apt-get install ruby-dev
    sudo apt-get install nodejs Python2.7
    ```
	然后一路回车。  
	
2. 安装jekyll  
     使用RubyGems 安装 jekyll  
     sudo gem install jekyll
     上面的东西由于我本机已经搭建过了，所以就不演示了。  
     
3. 去jekyll官网下载一个模板  官网: <http://jekyllthemes.org>
	 ![2019-08-15 15-29-11屏幕截图.png](https://i.loli.net/2019/08/15/CHFP8Vvxs6KYGRq.png)
	 我用的是 <http://jekyllthemes.org/themes/LOFFER/> 这个
	 下载，解压。
	  我这里解压到用户目录并更改名字为 myblog
	
	  cd这个目录并初始化仓库
	  ![2019-08-15 15-43-58屏幕截图.png](https://i.loli.net/2019/08/15/L3PaTcYEAbHgniB.png)
	  然后执行 git add .
	  和git commit -m "第一次提交"
	
	  编译并本机运行
	​	![2019-08-15 16-17-25屏幕截图.png](https://i.loli.net/2019/08/15/MNeXg3AcCVOwEoF.png)
	
	 ```
	 jekyll build
	 jekyll server
	 ```
	访问 http://127.0.0.1:4000/LOFFER/	会发现本地已经搭建成功  
	
4.  将博客上传到Github
	 首先注册Github账号，然后创建一个仓库，设置仓库名为LOFFER
	
	 ![2019-08-15 16-19-22屏幕截图.png](https://i.loli.net/2019/08/15/bushzEa6dUWjqto.png)
	
	 然后创建
	 cd你的博客目录，然后
	 ```
	 git init
	 git add README.md
	 git commit -m "first commit"
	 git remote add origin https://github.com/xxxxxxxx/LOFFER.git  你的项目地址
	 git push -u origin master
	 ```
	 如果不懂Git的话可以了解一下 廖雪峰老师的 Git 教程 <https://www.liaoxuefeng.com/wiki/896043488029600>
	
	我就直接操作，不细讲了
	
	然后接下来就在仓库执行以下命令。
	```
    git init
	git add .
	git commit -m "This is a test"
	git remote add origin https://github.com/xxxxxx/LOFFER.git
	git push -u origin master	输入账号密码。
	```
	然后在Github Page里把分支改为master
	访问Github Page上的URL,搭建成功
	![2019-08-15 16-36-52屏幕截图.png](https://i.loli.net/2019/08/15/qwtHihjACd9rJ27.png)
	
	![2019-08-15 16-51-01屏幕截图.png](https://i.loli.net/2019/08/15/Imxj5k3nLoDrhRA.png)