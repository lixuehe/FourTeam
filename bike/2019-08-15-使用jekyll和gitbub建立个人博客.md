---
layout: post
title:  "使用jekyll和github建立个人博客"
date:   2019-08-15 14:38:21 +0800
tags:
      - 学习记录
---

##### **一、安装jekyll 及环境**

1. 进入ubuntu系统，打开terminal终端，输入指令：sudo apt-get install ruby rubygems-integration ruby-bundler ruby-dev

   一直回车就可以了

2. 输入指令安装nodejs和python：sudo apt-get install nodejs Python2.7

   然后一直回车

3. 安装jekyll ：sudo gem install jekyll

   一直回车

**二、选择模板**

去jekyll（http://jekyllthemes.org/）官网下载一个模板，解压

**三、调试程序**

cd命令进入解压后的文件夹执行指令：jekyll build 

编译完成启动测试：执行指令 jekyll server 

打开浏览器地址栏输入：http://127.0.0.1:4000/就可以看到模板的界面了

**四、实践操作环境**

选择模板

dbyll  Domo地址 (http://dbtek.github.io/dbyll/)

github 地址(https://github.com/dbtek/dbyll)

![1565852859866](/Typora/typora-user-images/1565852859866.png)选择 Fork 克隆到自己的github仓库 然后回到仓库的项目地址 选择Settings 



![1565852982367](/Typora/typora-user-images/1565852982367.png)

修改Repository name 为 （<username>.github.io） username为你自己的 github 用户名  然后点击 Rename 进行修改

**建立本地git仓库**

将远程的仓库的文件 https://github.com/bike-py/bike-py.github.io.git 拉取到本地目录

 

![1565853423122](/Typora/typora-user-images/1565853423122.png)

cd命令进入模板文件夹执行指令：jekyll build 

编译完成启动测试：执行指令 jekyll server 

![1565853570900](/Typora/typora-user-images/1565853570900.png)

打开 http://127.0.0.1:4000 可以看见调试内容 然后根据自己需求修改_config.yml 内容 以及其他文件内容 

~~~
title: Bike  （网站名字）

name: 名字
  email:      
  github: bike-py
  twitter: bike
  pinterest: asd123
  linkedin: asd123
  bio: 签名
  email_md5: 726351295ec82e145928582f595aa3aa

~~~

修改完毕之后 使用 jekyll server 进行调试 直到自己感觉没问题

**同步更新到github**

内容修改完成后 使用 git 同步到 github

~~~
git init　建立并初始化仓库
git add . 　　存入暂存区　(也可以单独使用 git add _config.yml)
git status　查看当前状态
git commit -m "备注（例如；配置修改）" 提交到本地版本仓库
git remote add origin https://github.com/bike-py/bike-py.github.io.git  链接到github 仓库
git push origin master  输入github账号密码上传本地分支master内容到github
~~~

打开 自己的博客主页 https://bike-py.github.io/ 就可以看见效果了

#### **总结遇到的问题**

问题主要是发生在git 由于自己多次修改内容 还有分支对不上

要注意本地的分支名字 和 girhub的分支名字要对应 自己本地是 master github的显示是gh-pages 导致自己修改很多次 在github上面 总是看不见修改的内容  

![1565854411734](/Typora/typora-user-images/1565854411734.png)

这里可以查看 切换分支 

git branch  可以查看本地分支名字

**git配置过程中fatal:拒绝合并无关的历史**

首先将远程仓库和本地仓库关联起来：

git branch –set-upstream-to=origin/master master

然后使用git pull整合远程仓库和本地仓库，

git pull –allow-unrelated-histories (忽略版本不同造成的影响)

**更新被拒绝，因为您当前分支的最新提交落后于其对应的远程分支**

提示：更新被拒绝，因为您当前分支的最新提交落后于其对应的远程分支。 提示：再次推送前，先与远程变更合并（如 ‘git pull …‘）。详见 提示：’git push –help’ 中的 ‘Note about fast-forwards’ 小节。

引起这个问题是远程仓库和本地不同步引起的

解决方案：需要**先获取远端更新并与本地合并**,再git push 具体操作如下:

```
git remote add origin https://github.com/bike-py/bike-py.github.io.git 
$git fetch origin    //获取远程更新
$git merge origin/master //把更新的内容合并到本地分支
```